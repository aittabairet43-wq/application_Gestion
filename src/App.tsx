import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { dbService } from './services/db';
import { useAuthStore } from './store/useAuthStore';
import MainLayout from './layouts/MainLayout';
import POS from './pages/pos';
import Inventory from './pages/inventory';
import ProductDetail from './pages/inventory/ProductDetail';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import CashLogs from './pages/reports/CashLogs';
import ShiftAnalytics from './pages/reports/ShiftAnalytics';
import Branches from './pages/branches';
import Users from './pages/users';
import InvoicePreview from './pages/invoices/Preview';
import DeveloperProfile from './pages/profile/Developer';
import AccessDenied from './pages/errors/AccessDenied';
import DataEngine from './pages/engine';
import Messages from './pages/messages';
import CloudBackup from './pages/backup';
import DailyTasks from './pages/tasks';
import DebtDetails from './pages/debts';

function App() {
    const [isDbReady, setIsDbReady] = useState(false);
    const [isAuthInitialized, setIsAuthInitialized] = useState(false);
    const { isAuthenticated, initAuth } = useAuthStore();

    useEffect(() => {
        initAuth();
        setIsAuthInitialized(true);

        if (isAuthenticated) {
            dbService.init().then(() => setIsDbReady(true));
        }
    }, [isAuthenticated, initAuth]);

    if (!isAuthInitialized) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#f8f9fb] rtl" dir="rtl">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#004253] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#004253] font-bold font-headline">جاري تهيئة نظام Kinetiq...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        );
    }

    if (!isDbReady) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#f8f9fb] rtl" dir="rtl">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#004253] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#004253] font-bold font-headline">جاري تهيئة قاعدة البيانات الآمنة...</p>
                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="engine" element={<DataEngine />} />
                    <Route path="pos" element={<POS />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="inventory/:id" element={<ProductDetail />} />
                    <Route path="branches" element={<Branches />} />
                    <Route path="backup" element={<CloudBackup />} />
                    <Route path="tasks" element={<DailyTasks />} />
                    <Route path="debts" element={<DebtDetails />} />
                    <Route path="invoices/preview" element={<InvoicePreview />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="reports/cash-logs" element={<CashLogs />} />
                    <Route path="reports/shift-analytics" element={<ShiftAnalytics />} />
                    <Route path="users" element={<Users />} />
                    <Route path="profile" element={<DeveloperProfile />} />
                </Route>
                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;