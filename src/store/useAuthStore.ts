import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User & { password: string }) => void;
    logout: () => void;
    initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    
    login: (userData) => {
        set({ user: userData, isAuthenticated: true });
        localStorage.setItem('auth', JSON.stringify(userData));
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
                set({ user: userData, isAuthenticated: true });
            } catch (e) {
                localStorage.removeItem('auth');
            }
        }
    }
}));