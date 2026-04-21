import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { dbService } from './services/db';
import { useAuthStore } from './store/useAuthStore';
import MainLayout from './layouts/MainLayout';
import POS from './pages/POS/index';
import Inventory from './pages/Inventory/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Dashboard from './pages/Dashboard/index';
import Reports from './pages/Reports/index';
import Users from './pages/Users/index';

function App() {
    const [isDbReady, setIsDbReady] = useState(false);
    const { isAuthenticated, initAuth } = useAuthStore();

    useEffect(() => {
        initAuth();
        dbService.init().then(() => setIsDbReady(true));
    }, []);

    if (!isDbReady) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#f8f9fb] rtl" dir="rtl">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#004253] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#004253] font-bold">جاري تهيئة قاعدة بيانات Kinetiq...</p>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
                <Route path="/" element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="pos" element={<POS />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;