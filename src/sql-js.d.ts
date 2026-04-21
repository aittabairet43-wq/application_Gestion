declare module 'sql.js' {
    export interface Database {
        run(query: string, params?: any[]): void;
        exec(query: string, params?: any[]): any[];
        export(): Uint8Array;
        close(): void;
    }
    export type SqlValue = number | string | Uint8Array | null;
    export default function initSqlJs(config?: any): Promise<{
        Database: new (data?: Uint8Array) => Database;
    }>;
}