import React, { useState, useEffect } from 'react';
import dbService from '../../../services/db';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const res = dbService.exec("SELECT id, username, role FROM users");
        if (res.length > 0) {
            setUsers(res[0].values.map(row => ({ id: row[0], username: row[1], role: row[2] })));
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black text-primary font-headline tracking-tight">إدارة الطاقم</h1>
                <button className="bg-primary text-white px-6 py-2.5 rounded font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">person_add</span>
                    إضافة موظف جديد
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(u => (
                    <div key={u.id} className="bg-white p-6 rounded shadow-sm border border-slate-100 flex items-center gap-4 hover:border-primary/20 transition-colors group">
                        <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-primary font-bold text-lg border border-slate-100 group-hover:bg-primary-container group-hover:text-white transition-all">
                            {u.username[0].toUpperCase()}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">{u.username}</h3>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-0.5">
                                {u.role === 'admin' ? 'مدير النظام' : 'كاشير / بائع'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;