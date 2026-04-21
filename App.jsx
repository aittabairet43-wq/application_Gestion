import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import dbService from '../db';
import { useAuthStore } from '../useAuthStore';
import MainLayout from '../MainLayout';
import POS from './POS';
import Inventory from './Inventory';
import Login from './Login';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Users from './pages/Users';

function App() {
    const [isDbReady, setIsDbReady] = useState(false);
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        dbService.init().then(() => {
            setIsDbReady(true);
        });
    }, []);

    if (!isDbReady) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-background">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-primary font-bold">جاري تهيئة قاعدة بيانات Kinetiq...</p>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/pos" />} />

                <Route path="/" element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
                    <Route index element={<Navigate to="/pos" />} />
                    <Route path="pos" element={<POS />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="users" element={<Users />} />
                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;