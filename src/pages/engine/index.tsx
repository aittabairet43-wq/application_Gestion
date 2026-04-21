import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db';
import toast from 'react-hot-toast';

const DataEngine = () => {
    const [items, setItems] = useState<any[]>([]);
    const [logs, setLogs] = useState<string[]>([]);
    const [formData, setFormData] = useState({ name: '', price: '' });

    const addLog = (msg: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
    };

    const refreshData = () => {
        try {
            const results = dbService.exec("SELECT * FROM products ORDER BY id DESC LIMIT 10");
            if (results.length > 0) {
                setItems(results[0].values);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        refreshData();
        addLog("System: تم تحميل البيانات من المحرك الهجين");
    }, []);

    const handleAdd = async () => {
        if (!formData.name || !formData.price) return;
        
        try {
            dbService.run("INSERT INTO products (name, barcode, price, quantity) VALUES (?, ?, ?, ?)", [formData.name, 'N/A', formData.price, 0]);
            await dbService.save();
            addLog(`SQL: INSERT [${formData.name}] - (${formData.price} ر.س)`);
            toast.success('تمت الإضافة بنجاح');
            setFormData({ name: '', price: '' });
            refreshData();
        } catch (e) {
            toast.error('حدث خطأ أثناء الحفظ');
        }
    };

    return (
        <div className="max-w-5xl mx-auto rtl text-right" dir="rtl">
            <div className="mb-8">
                <h1 className="text-2xl font-black text-slate-900 font-headline">محرك معالجة البيانات الهجين</h1>
                <p className="text-slate-500 mt-1">إدارة بيانات SQLite مع المزامنة في IndexedDB</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-5 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">add_box</span>
                        إضافة صنف جديد للذاكرة
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">اسم المنتج</label>
                            <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary" placeholder="مثلاً: حليب طازج" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">السعر</label>
                            <input value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} type="number" className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary" placeholder="0.00" />
                        </div>
                        <button onClick={handleAdd} className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 shadow-lg shadow-primary/10">تنفيذ الاستعلام والحفظ</button>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-7 bg-slate-900 text-slate-300 p-6 rounded-xl shadow-xl font-mono text-xs overflow-hidden">
                    <h3 className="font-bold text-[#98FFD9] flex items-center gap-2 mb-4 font-headline">
                        <span className="material-symbols-outlined text-sm">monitor_heart</span>
                        سجل العمليات (Persistence Log)
                    </h3>
                    <div className="space-y-2 h-48 overflow-y-auto custom-scrollbar pr-2">
                        {logs.map((log, i) => <p key={i} className="border-r-2 border-[#98FFD9] pr-2 py-0.5">{log}</p>)}
                    </div>
                </div>

                <div className="col-span-12 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mt-2">
                    <table className="w-full text-right text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[11px]">
                            <tr>
                                <th className="px-8 py-4 border-b">ID</th>
                                <th className="px-8 py-4 border-b">الاسم</th>
                                <th className="px-8 py-4 border-b">السعر</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {items.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-8 py-4 font-mono text-slate-400">#{row[0]}</td>
                                    <td className="px-8 py-4 font-bold text-slate-800">{row[1]}</td>
                                    <td className="px-8 py-4 text-primary font-black">{row[3]} ر.س</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataEngine;