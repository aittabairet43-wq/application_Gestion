import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { dbService } from '../../services/db';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = dbService.exec("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
            if (res.length > 0 && res[0].values.length > 0) {
                const user = res[0].values[0];
                login({ id: user[0] as number, username: user[1] as string, role: user[3] as 'admin' | 'staff' });
                navigate('/dashboard');
            } else {
                setError('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        } catch (err) {
            setError('حدث خطأ في النظام');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background font-body rtl" dir="rtl">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                        <span className="material-symbols-outlined text-4xl">storefront</span>
                    </div>
                    <h1 className="text-3xl font-black text-primary font-headline tracking-tight">Kinetiq Retail</h1>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    {error && <div className="p-4 bg-error/10 text-error text-sm font-bold rounded">{error}</div>}
                    <div>
                        <label className="block text-xs font-bold text-outline mb-2 uppercase">اسم المستخدم</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl font-bold" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-outline mb-2 uppercase">كلمة المرور</label>
                        <input type="password" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl font-bold" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">تسجيل الدخول</button>
                </form>
            </div>
        </div>
    );
};

export default Login;