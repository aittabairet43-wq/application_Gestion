import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    
    login: (userData) => {
        set({ 
            user: userData, 
            isAuthenticated: true 
        });
        localStorage.setItem('auth', JSON.stringify(userData));
    },
    
    logout: () => {
        set({ 
            user: null, 
            isAuthenticated: false 
        });
        localStorage.removeItem('auth');
    },
    
    // Load auth state from localStorage on app start
    initAuth: () => {
        const savedAuth = localStorage.getItem('auth');
        if (savedAuth) {
            const userData = JSON.parse(savedAuth);
            set({ 
                user: userData, 
                isAuthenticated: true 
            });
        }
    }
}));