"use client";

import React, { useState, useEffect } from 'react';
import { dbService } from '../services/db';
import toast from 'react-hot-toast';

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState<any[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', company: '', phone: '', address: '' });

    const loadSuppliers = () => {
        try {
            // إنشاء الجدول إذا لم يكن موجوداً
            dbService.run("CREATE TABLE IF NOT EXISTS suppliers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, company TEXT, phone TEXT, address TEXT)");
            const res = dbService.exec("SELECT * FROM suppliers ORDER BY id DESC");
            if (res.length > 0) {
                setSuppliers(res[0].values);
            } else {
                setSuppliers([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadSuppliers();
    }, []);

    const handleAddSupplier = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dbService.run(
                "INSERT INTO suppliers (name, company, phone, address) VALUES (?, ?, ?, ?)",
                [formData.name, formData.company, formData.phone, formData.address]
            );
            await dbService.save();
            toast.success('تم إضافة المورد بنجاح');
            setShowAddModal(false);
            setFormData({ name: '', company: '', phone: '', address: '' });
            loadSuppliers();
        } catch (err) {
            toast.error('خطأ في إضافة المورد');
        }
    };

    const deleteSupplier = async (id: number) => {
        if (!confirm('هل أنت متأكد من حذف هذا المورد؟')) return;
        try {
            dbService.run("DELETE FROM suppliers WHERE id = ?", [id]);
            await dbService.save();
            toast.success('تم الحذف بنجاح');
            loadSuppliers();
        } catch (err) {
            toast.error('خطأ في الحذف');
        }
    };

    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            <header className="flex justify-between items-end">
                <div className="text-right">
                    <h2 className="text-3xl font-black text-primary mb-2 font-headline">إدارة الموردين</h2>
                    <p className="text-slate-500">إدارة بيانات الموردين، شركات التوريد، ومعلومات الاتصال</p>
                </div>
                <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">person_add</span>
                    <span>إضافة مورد جديد</span>
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suppliers.length === 0 ? (
                    <div className="col-span-full p-12 text-center bg-white rounded-xl border border-dashed border-slate-300 text-slate-400">
                        لا يوجد موردين مسجلين حالياً.
                    </div>
                ) : (
                    suppliers.map((s) => (
                        <div key={s[0]} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-2xl">local_shipping</span>
                                </div>
                                <button onClick={() => deleteSupplier(s[0])} className="text-slate-300 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                            <h3 className="font-bold text-lg text-slate-800">{s[1]}</h3>
                            <p className="text-sm text-primary font-semibold mb-3">{s[2]}</p>
                            <div className="space-y-2 text-xs text-slate-500">
                                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> {s[3]}</p>
                                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> {s[4]}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
                        <h3 className="text-xl font-bold text-primary mb-6 font-headline">إضافة مورد جديد</h3>
                        <form onSubmit={handleAddSupplier} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">اسم المسؤول</label>
                                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="مثال: محمد أحمد" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">اسم الشركة</label>
                                <input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="شركة التوريد المحدودة" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">رقم الهاتف</label>
                                <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none text-left" dir="ltr" placeholder="+966" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">العنوان</label>
                                <input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="المدينة، الحي" />
                            </div>
                            <div className="flex gap-3 mt-8">
                                <button type="submit" className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110">حفظ المورد</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">إلغاء</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Suppliers;