import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';
import dbService from '../../../services/db';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize auth state from localStorage
        useAuthStore.getState().initAuth();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = dbService.exec(
                "SELECT * FROM users WHERE username = ? AND password = ?",
                [username, password]
            );

            if (res.length > 0 && res[0].values.length > 0) {
                const userData = {
                    id: res[0].values[0][0],
                    username: res[0].values[0][1],
                    role: res[0].values[0][3]
                };
                login(userData);
                navigate('/pos');
            } else {
                setError('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        } catch (err) {
            setError('حدث خطأ أثناء تسجيل الدخول');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background font-body rtl" dir="rtl">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-4xl">storefront</span>
                    </div>
                    <h1 className="text-3xl font-black text-primary font-headline tracking-tight">Kinetiq Retail</h1>
                    <p className="text-slate-500 mt-2 font-medium">نظام إدارة المبيعات والمخزون</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-error/10 border-r-4 border-error text-error text-sm font-bold rounded">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold text-outline mb-2 uppercase tracking-widest">اسم المستخدم</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                            <input
                                type="text"
                                className="w-full pr-12 pl-4 py-3.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-bold"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="أدخل اسم المستخدم"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-outline mb-2 uppercase tracking-widest">كلمة المرور</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                            <input
                                type="password"
                                className="w-full pr-12 pl-4 py-3.5 bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-bold"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4">
                        <span>تسجيل الدخول</span>
                        <span className="material-symbols-outlined text-sm">login</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;