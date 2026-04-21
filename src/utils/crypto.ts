interface CryptoUtils {
    deriveKey: (password: string, salt: Uint8Array) => Promise<CryptoKey>;
    encrypt: (data: Uint8Array, key: CryptoKey) => Promise<{ encrypted: Uint8Array; iv: Uint8Array }>;
    decrypt: (encrypted: Uint8Array, iv: Uint8Array, key: CryptoKey) => Promise<Uint8Array>;
    generateSalt: () => Uint8Array;
}

const cryptoUtils: CryptoUtils = {
    async deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );

        return crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt as BufferSource,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    },

    async encrypt(data: Uint8Array, key: CryptoKey): Promise<{ encrypted: Uint8Array; iv: Uint8Array }> {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            data as BufferSource
        );
        return { encrypted: new Uint8Array(encrypted), iv: iv };
    },

    async decrypt(encrypted: Uint8Array, iv: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv as BufferSource },
            key,
            encrypted as BufferSource
        );
        return new Uint8Array(decrypted);
    },

    generateSalt(): Uint8Array {
        return crypto.getRandomValues(new Uint8Array(16));
    }
};

export default cryptoUtils;