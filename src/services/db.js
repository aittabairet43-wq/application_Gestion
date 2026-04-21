import { initSqlJs } from 'sql.js';

const DB_NAME = "KinetiqRetailDB";
const STORE_NAME = "sqlite_file";
const KEY_NAME = "db_binary";

let db = null;

// IndexedDB operations
async function getIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveToIndexedDB(binaryData) {
    const idb = await getIndexedDB();
    const tx = idb.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(binaryData, KEY_NAME);
}

async function loadFromIndexedDB() {
    const idb = await getIndexedDB();
    return new Promise((resolve) => {
        const tx = idb.transaction(STORE_NAME, "readonly");
        const request = tx.objectStore(STORE_NAME).get(KEY_NAME);
        request.onsuccess = () => resolve(request.result);
    });
}

// Initialize database
export const dbService = {
    async init() {
        try {
            const sqlPromise = initSqlJs({
                locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
            });

            const [SQL, savedBinary] = await Promise.all([sqlPromise, loadFromIndexedDB()]);

            if (savedBinary) {
                db = new SQL.Database(new Uint8Array(savedBinary));
                console.log("Database loaded from IndexedDB");
            } else {
                db = new SQL.Database();
                // Create tables
                db.run(`CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT UNIQUE,
                    password TEXT,
                    role TEXT
                )`);
                
                db.run(`CREATE TABLE IF NOT EXISTS products (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    barcode TEXT,
                    price REAL,
                    quantity INTEGER,
                    unit TEXT
                )`);
                
                db.run(`CREATE TABLE IF NOT EXISTS sales (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    total REAL,
                    payment_method TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`);
                
                db.run(`CREATE TABLE IF NOT EXISTS sale_items (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    sale_id INTEGER,
                    product_id INTEGER,
                    quantity INTEGER,
                    price REAL,
                    FOREIGN KEY (sale_id) REFERENCES sales (id),
                    FOREIGN KEY (product_id) REFERENCES products (id)
                )`);
                
                console.log("New database created");
            }

            // Create default admin user if none exists
            const userCount = db.exec("SELECT count(*) FROM users");
            if (userCount[0].values[0][0] === 0) {
                db.run("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", 
                    ['admin', '123456', 'admin']);
            }

            return true;
        } catch (err) {
            console.error("Database initialization failed:", err);
            return false;
        }
    },

    get db() {
        return db;
    },

    async save() {
        if (db) {
            const binary = db.export();
            await saveToIndexedDB(binary);
            return true;
        }
        return false;
    },

    exec(query, params = []) {
        if (!db) throw new Error("Database not initialized");
        return db.exec(query, params);
    },

    run(query, params = []) {
        if (!db) throw new Error("Database not initialized");
        return db.run(query, params);
    }
};