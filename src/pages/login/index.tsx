"use client";

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { dbService } from '../../services/db';
import toast from 'react-hot-toast';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // First check if user exists
            const res = dbService.exec("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
            
            if (res.length > 0 && res[0].values.length > 0) {
                const user = res[0].values[0];
                
                // Initialize secure database with user credentials
                const initSuccess = await dbService.init();
                
                if (initSuccess) {
                    login({ 
                        id: user[0] as number, 
                        username: user[1] as string, 
                        role: user[3] as 'admin' | 'staff',
                        password: password // Store password for encryption
                    });
                    navigate('/dashboard');
                } else {
                    setError('فشل في تهيئة قاعدة البيانات الآمنة');
                }
            } else {
                setError('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('حدث خطأ في النظام');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] font-body rtl p-4" dir="rtl">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-[#004253] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                        <span className="material-symbols-outlined text-4xl">security</span>
                    </div>
                    <h1 className="text-3xl font-black text-[#004253] font-headline tracking-tight">Kinetiq Retail</h1>
                    <p className="text-slate-500 mt-2">تسجيل الدخول الآمن إلى النظام</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 text-sm font-bold rounded border border-red-100">
                            {error}
                        </div>
                    )}
                    
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">اسم المستخدم (البريد)</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-1 focus:ring-[#004253] outline-none" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">كلمة المرور</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-1 focus:ring-[#004253] outline-none" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-[#004253] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#004253]/20 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                                جاري التحقق...
                            </span>
                        ) : (
                            'تسجيل الدخول الآمن'
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                    <p className="text-slate-500 text-sm">
                        ليس لديك حساب؟{' '}
                        <Link className="text-[#004253] font-bold hover:underline" to="/register">إنشاء حساب جديد</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;