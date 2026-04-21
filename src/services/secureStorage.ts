import cryptoUtils from '../utils/crypto.js';

interface SecureStorage {
    saveEncrypted: (data: Uint8Array, password: string) => Promise<void>;
    loadEncrypted: (password: string) => Promise<Uint8Array | null>;
    clear: () => Promise<void>;
}

const SECURE_STORAGE_KEY = 'kinetiq_encrypted_db';
const SALT_KEY = 'kinetiq_db_salt';

const secureStorage: SecureStorage = {
    async saveEncrypted(data: Uint8Array, password: string): Promise<void> {
        const salt = cryptoUtils.generateSalt();
        const key = await cryptoUtils.deriveKey(password, salt);
        const { encrypted, iv } = await cryptoUtils.encrypt(data, key);

        // Store salt, IV, and encrypted data separately
        const storageData = {
            salt: Array.from(salt),
            iv: Array.from(iv),
            encrypted: Array.from(encrypted)
        };

        localStorage.setItem(SECURE_STORAGE_KEY, JSON.stringify(storageData));
        localStorage.setItem(SALT_KEY, JSON.stringify(Array.from(salt)));
    },

    async loadEncrypted(password: string): Promise<Uint8Array | null> {
        try {
            const storageDataStr = localStorage.getItem(SECURE_STORAGE_KEY);
            if (!storageDataStr) return null;

            const storageData = JSON.parse(storageDataStr);
            const salt = new Uint8Array(storageData.salt);
            const iv = new Uint8Array(storageData.iv);
            const encrypted = new Uint8Array(storageData.encrypted);

            const key = await cryptoUtils.deriveKey(password, salt);
            return await cryptoUtils.decrypt(encrypted, iv, key);
        } catch (error) {
            console.error('Failed to decrypt database:', error);
            return null;
        }
    },

    async clear(): Promise<void> {
        localStorage.removeItem(SECURE_STORAGE_KEY);
        localStorage.removeItem(SALT_KEY);
    }
};

export default secureStorage;