"use client";

import React, { useState, useEffect } from 'react';
import { dbService } from '../services/db';
import toast from 'react-hot-toast';

const Expenses = () => {
    const [expenses, setExpenses] = useState<any[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ title: '', category: 'مشتريات', amount: '', status: 'مدفوع' });

    const loadExpenses = () => {
        try {
            // التأكد من وجود الجدول
            dbService.run("CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, category TEXT, amount REAL, status TEXT, date DATETIME DEFAULT CURRENT_TIMESTAMP)");
            const res = dbService.exec("SELECT * FROM expenses ORDER BY id DESC");
            if (res.length > 0) {
                setExpenses(res[0].values);
            } else {
                setExpenses([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadExpenses();
    }, []);

    const handleAddExpense = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dbService.run(
                "INSERT INTO expenses (title, category, amount, status) VALUES (?, ?, ?, ?)",
                [formData.title, formData.category, formData.amount, formData.status]
            );
            await dbService.save();
            toast.success('تم تسجيل المصروف بنجاح');
            setShowAddModal(false);
            setFormData({ title: '', category: 'مشتريات', amount: '', status: 'مدفوع' });
            loadExpenses();
        } catch (err) {
            toast.error('خطأ في التسجيل');
        }
    };

    const deleteExpense = async (id: number) => {
        if (!confirm('حذف هذا السجل؟')) return;
        try {
            dbService.run("DELETE FROM expenses WHERE id = ?", [id]);
            await dbService.save();
            loadExpenses();
        } catch (err) {
            toast.error('خطأ في الحذف');
        }
    };

    const totalAmount = expenses.reduce((acc, curr) => acc + curr[3], 0);

    return (
        <div className="flex flex-col gap-8 rtl text-right" dir="rtl">
            <header className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black text-primary mb-2 font-headline">إدارة المصروفات</h2>
                    <p className="text-slate-500">مراقبة نفقات المتجر والتدفقات النقدية الخارجة</p>
                </div>
                <button onClick={() => setShowAddModal(true)} className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined">add_circle</span>
                    <span>إضافة مصروف جديد</span>
                </button>
            </header>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">إجمالي المصاريف</p>
                    <h3 className="text-2xl font-black text-primary">{totalAmount.toLocaleString()} ر.س</h3>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">عدد المعاملات</p>
                    <h3 className="text-2xl font-black text-slate-800">{expenses.length} معاملة</h3>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-r-4 border-secondary">
                    <p className="text-sm text-slate-500 mb-1">حالة الصندوق</p>
                    <h3 className="text-2xl font-black text-secondary-container">مستقر</h3>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-right">
                    <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">التفاصيل</th>
                            <th className="px-6 py-4">الفئة</th>
                            <th className="px-6 py-4 text-center">المبلغ</th>
                            <th className="px-6 py-4 text-center">الحالة</th>
                            <th className="px-6 py-4 text-center">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {expenses.length === 0 ? (
                            <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-400">لا توجد مصروفات مسجلة</td></tr>
                        ) : (
                            expenses.map((exp) => (
                                <tr key={exp[0]} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-slate-800">{exp[1]}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{exp[2]}</td>
                                    <td className="px-6 py-4 text-center font-black text-error">{exp[3]} ر.س</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${exp[4] === 'مدفوع' ? 'bg-secondary/20 text-secondary-container' : 'bg-red-50 text-error'}`}>
                                            {exp[4]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={() => deleteExpense(exp[0])} className="p-2 text-slate-300 hover:text-error transition-colors">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
                        <h3 className="text-xl font-bold text-primary mb-6 font-headline">تسجيل مصروف جديد</h3>
                        <form onSubmit={handleAddExpense} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">وصف المصروف</label>
                                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="مثال: فاتورة كهرباء شهر مايو" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">الفئة</label>
                                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none">
                                    <option value="مشتريات">مشتريات مخزون</option>
                                    <option value="مرافق">مرافق (كهرباء/ماء)</option>
                                    <option value="رواتب">رواتب وأجور</option>
                                    <option value="صيانة">صيانة وإصلاحات</option>
                                    <option value="أخرى">أخرى</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2">المبلغ</label>
                                    <input required type="number" step="0.01" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="0.00" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2">الحالة</label>
                                    <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none">
                                        <option value="مدفوع">مدفوع</option>
                                        <option value="معلق">معلق</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <button type="submit" className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110">تسجيل</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">إلغاء</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Expenses;