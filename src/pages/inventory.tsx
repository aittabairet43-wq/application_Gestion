"use client";

import React, { useState, useEffect } from 'react';
import { dbService } from '../services/db';
import toast from 'react-hot-toast';

const Inventory = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', barcode: '', price: '', quantity: '', unit: 'حبة' });

    const loadProducts = () => {
        try {
            const res = dbService.exec("SELECT * FROM products ORDER BY id DESC");
            if (res.length > 0) {
                setProducts(res[0].values);
            } else {
                setProducts([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dbService.run(
                "INSERT INTO products (name, barcode, price, quantity, unit) VALUES (?, ?, ?, ?, ?)",
                [formData.name, formData.barcode, formData.price, formData.quantity, formData.unit]
            );
            await dbService.save();
            toast.success('تم إضافة المنتج بنجاح');
            setShowAddModal(false);
            setFormData({ name: '', barcode: '', price: '', quantity: '', unit: 'حبة' });
            loadProducts();
        } catch (err) {
            toast.error('خطأ في إضافة المنتج');
        }
    };

    const deleteProduct = async (id: number) => {
        if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
        try {
            dbService.run("DELETE FROM products WHERE id = ?", [id]);
            await dbService.save();
            toast.success('تم الحذف');
            loadProducts();
        } catch (err) {
            toast.error('خطأ في الحذف');
        }
    };

    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            <header className="flex justify-between items-end">
                <div className="text-right">
                    <h2 className="text-3xl font-black text-primary mb-2 font-headline">إدارة المخزن</h2>
                    <p className="text-slate-500">إدارة المنتجات، مراقبة المخزون، وتحديث الأسعار</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>إضافة منتج جديد</span>
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-right">
                    <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">المنتج</th>
                            <th className="px-6 py-4">الباركود</th>
                            <th className="px-6 py-4 text-center">السعر</th>
                            <th className="px-6 py-4 text-center">الكمية</th>
                            <th className="px-6 py-4 text-center">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">لا توجد منتجات مسجلة حالياً</td>
                            </tr>
                        ) : (
                            products.map((p) => (
                                <tr key={p[0]} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-slate-800">{p[1]}</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">{p[2]}</td>
                                    <td className="px-6 py-4 text-center font-bold text-primary">{p[3]} ر.س</td>
                                    <td className="px-6 py-4 text-center font-bold text-slate-700">{p[4]} {p[5]}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={() => deleteProduct(p[0])} className="p-2 text-slate-300 hover:text-error transition-colors">
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
                        <h3 className="text-xl font-bold text-primary mb-6 font-headline">إضافة منتج جديد</h3>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">اسم المنتج</label>
                                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="مثال: حليب المراعي" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">الباركود</label>
                                <input required value={formData.barcode} onChange={e => setFormData({...formData, barcode: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="628XXXXXXXXX" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2">السعر</label>
                                    <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="0.00" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-2">الكمية</label>
                                    <input required type="number" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="0" />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <button type="submit" className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110">حفظ المنتج</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">إلغاء</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;