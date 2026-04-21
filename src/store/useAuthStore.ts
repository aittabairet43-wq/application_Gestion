import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User & { password?: string }) => void;
    logout: () => void;
    initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    
    login: (userData) => {
        // Keep the password in memory state for DB decryption
        set({ user: userData, isAuthenticated: true });
        
        // Persist only safe non-sensitive data to localStorage
        const { password, ...safeUser } = userData;
        localStorage.setItem('auth', JSON.stringify(safeUser));
    },
    
    logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem('auth');
    },
    
    initAuth: () => {
        const savedAuth = localStorage.getItem('auth');
        if (savedAuth) {
            try {
                const userData = JSON.parse(savedAuth);
                // On refresh, we have the user but NO password. 
                // The user will be logged in but the DB vault will remain locked 
                // until they provide the password again if needed.
                set({ user: userData, isAuthenticated: true });
            } catch (e) {
                localStorage.removeItem('auth');
            }
        }
    }
}));