import initSqlJs, { Database } from 'sql.js';
import secureStorage from './secureStorage';
import { useAuthStore } from '../store/useAuthStore';

const DB_NAME = "KinetiqRetailDB";
const STORE_NAME = "sqlite_file";
const KEY_NAME = "db_binary";

let db: Database | null = null;
let isAuthenticated = false;

async function getIndexedDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export const secureDbService = {
    async init(): Promise<boolean> {
        try {
            const SQL = await initSqlJs({
                locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/sql.js@1.14.1/dist/${file}`
            });

            // Check if user is authenticated
            const auth = useAuthStore.getState();
            if (!auth.isAuthenticated || !auth.user) {
                throw new Error('User not authenticated');
            }

            isAuthenticated = true;

            // Try to load encrypted database
            const savedBinary = await secureStorage.loadEncrypted((auth.user as any).password);
            
            if (savedBinary) {
                db = new SQL.Database(savedBinary);
            } else {
                // Create new database
                db = new SQL.Database();
                await this.createTables();
                // Save the empty database
                await this.save();
            }

            return true;
        } catch (err) {
            console.error("Database initialization failed:", err);
            isAuthenticated = false;
            return false;
        }
    },

    async createTables(): Promise<void> {
        if (!db) throw new Error("Database not initialized");
        
        db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT, role TEXT, full_name TEXT, phone TEXT)`);
        db.run(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, barcode TEXT, price REAL, quantity INTEGER, unit TEXT)`);
        db.run(`CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY AUTOINCREMENT, total REAL, payment_method TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        db.run(`CREATE TABLE IF NOT EXISTS sale_items (id INTEGER PRIMARY KEY AUTOINCREMENT, sale_id INTEGER, product_id INTEGER, quantity INTEGER, price REAL, FOREIGN KEY (sale_id) REFERENCES sales (id), FOREIGN KEY (product_id) REFERENCES products (id))`);

        // Create default admin user
        const userCount = db.exec("SELECT count(*) FROM users");
        if (Number(userCount[0].values[0][0]) === 0) {
            db.run("INSERT INTO users (username, password, role, full_name) VALUES (?, ?, ?, ?)", ['admin', '123456', 'admin', 'مدير النظام']);
        }
    },

    get dbInstance() {
        if (!isAuthenticated) {
            throw new Error("Database access denied - user not authenticated");
        }
        return db;
    },

    async save(): Promise<boolean> {
        if (!db || !isAuthenticated) return false;

        try {
            const binary = db.export();
            const auth = useAuthStore.getState();
            if (auth.user) {
                await secureStorage.saveEncrypted(binary, (auth.user as any).password);
            }
            return true;
        } catch (error) {
            console.error("Failed to save database:", error);
            return false;
        }
    },

    exec(query: string, params: any[] = []) {
        if (!db || !isAuthenticated) {
            throw new Error("Database access denied - user not authenticated");
        }
        return db.exec(query, params);
    },

    run(query: string, params: any[] = []) {
        if (!db || !isAuthenticated) {
            throw new Error("Database access denied - user not authenticated");
        }
        return db.run(query, params);
    },

    isAuthenticated(): boolean {
        return isAuthenticated;
    },

    async logout(): Promise<void> {
        isAuthenticated = false;
        db = null;
        await secureStorage.clear();
    }
};