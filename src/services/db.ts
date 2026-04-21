import initSqlJs, { Database } from 'sql.js';

const DB_NAME = "KinetiqRetailDB";
const STORE_NAME = "sqlite_file";
const KEY_NAME = "db_binary";

let db: Database | null = null;

async function getIndexedDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveToIndexedDB(binaryData: Uint8Array) {
    const idb = await getIndexedDB();
    const tx = idb.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(binaryData, KEY_NAME);
}

async function loadFromIndexedDB(): Promise<Uint8Array | null> {
    const idb = await getIndexedDB();
    return new Promise((resolve) => {
        const tx = idb.transaction(STORE_NAME, "readonly");
        const request = tx.objectStore(STORE_NAME).get(KEY_NAME);
        request.onsuccess = () => resolve(request.result);
    });
}

export const dbService = {
    async init() {
        try {
            const SQL = await initSqlJs({
                locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
            });

            const savedBinary = await loadFromIndexedDB();

            if (savedBinary) {
                db = new SQL.Database(new Uint8Array(savedBinary));
            } else {
                db = new SQL.Database();
                db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT, role TEXT)`);
                db.run(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, barcode TEXT, price REAL, quantity INTEGER, unit TEXT)`);
                db.run(`CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY AUTOINCREMENT, total REAL, payment_method TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
                db.run(`CREATE TABLE IF NOT EXISTS sale_items (id INTEGER PRIMARY KEY AUTOINCREMENT, sale_id INTEGER, product_id INTEGER, quantity INTEGER, price REAL, FOREIGN KEY (sale_id) REFERENCES sales (id), FOREIGN KEY (product_id) REFERENCES products (id))`);
            }

            const userCount = db.exec("SELECT count(*) FROM users");
            if (Number(userCount[0].values[0][0]) === 0) {
                db.run("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", ['admin', '123456', 'admin']);
            }
            return true;
        } catch (err) {
            console.error("Database initialization failed:", err);
            return false;
        }
    },

    get dbInstance() {
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

    exec(query: string, params: any[] = []) {
        if (!db) throw new Error("Database not initialized");
        return db.exec(query, params);
    },

    run(query: string, params: any[] = []) {
        if (!db) throw new Error("Database not initialized");
        return db.run(query, params);
    }
};