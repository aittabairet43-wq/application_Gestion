import initSqlJs, { Database } from 'sql.js';
import secureStorage from './secureStorage';
import { useAuthStore } from '../store/useAuthStore';

const DB_NAME = "KinetiqRetailDB";
const STORE_NAME = "sqlite_file";
const KEY_NAME = "db_binary";

let db: Database | null = null;
let isAuthenticated = false;

export const secureDbService = {
    async init(): Promise<boolean> {
        try {
            const SQL = await initSqlJs({
                locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/sql.js@1.14.1/dist/${file}`
            });

            const auth = useAuthStore.getState();
            // If we have no password in memory, we can't unlock the DB
            if (!auth.isAuthenticated || !auth.user || !auth.user.password) {
                console.warn('Database initialization skipped: Missing session password');
                return false;
            }

            isAuthenticated = true;

            const savedBinary = await secureStorage.loadEncrypted(auth.user.password);
            
            if (savedBinary) {
                db = new SQL.Database(savedBinary);
            } else {
                db = new SQL.Database();
                await this.createTables();
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
        
        // Security Fix: Removed default hardcoded admin user '123456'.
        // The first user must register via the registration page.
    },

    get dbInstance() {
        if (!isAuthenticated || !db) {
            return null;
        }
        return db;
    },

    async save(): Promise<boolean> {
        if (!db || !isAuthenticated) return false;

        try {
            const binary = db.export();
            const auth = useAuthStore.getState();
            if (auth.user && auth.user.password) {
                await secureStorage.saveEncrypted(binary, auth.user.password);
            }
            return true;
        } catch (error) {
            console.error("Failed to save database:", error);
            return false;
        }
    },

    exec(query: string, params: any[] = []) {
        if (!db || !isAuthenticated) {
            throw new Error("Database access denied");
        }
        return db.exec(query, params);
    },

    run(query: string, params: any[] = []) {
        if (!db || !isAuthenticated) {
            throw new Error("Database access denied");
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