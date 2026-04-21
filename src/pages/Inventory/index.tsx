import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db';
import { Product } from '../../types';

const Inventory = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', barcode: '', price: '', quantity: '', unit: 'قطعة' });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        const res = dbService.exec("SELECT * FROM products ORDER BY id DESC");
        if (res.length > 0) {
            setProducts(res[0].values.map((row: any) => ({
                id: row[0], name: row[1], barcode: row[2], price: row[3], quantity: row[4], unit: row[5]
            })));
        }
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        dbService.run("INSERT INTO products (name, barcode, price, quantity, unit) VALUES (?, ?, ?, ?, ?)", [formData.name, formData.barcode, formData.price, formData.quantity, formData.unit]);
        await dbService.save();
        setShowAddModal(false);
        setFormData({ name: '', barcode: '', price: '', quantity: '', unit: 'قطعة' });
        loadProducts();
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 font-headline">إدارة المخزون</h1>
                    <p className="text-slate-500 mt-1">عرض وتعديل بيانات المنتجات</p>
                </div>
                <button onClick={() => setShowAddModal(true)} className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">add_box</span> إضافة منتج
                </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-right">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase font-black border-b border-slate-100">
                            <th className="px-8 py-5">المنتج</th>
                            <th className="px-8 py-5">السعر</th>
                            <th className="px-8 py-5">الكمية</th>
                            <th className="px-8 py-5 text-center">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.map(product => (
                            <tr key={product.id} className="hover:bg-slate-50/50">
                                <td className="px-8 py-5 font-bold text-slate-800 text-sm">{product.name}</td>
                                <td className="px-8 py-5 font-black text-primary text-sm">{product.price} ر.س</td>
                                <td className="px-8 py-5">
                                    <span className={`text-sm font-bold ${product.quantity < 10 ? 'text-error' : 'text-slate-700'}`}>
                                        {product.quantity}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                    <button className="text-slate-300 hover:text-error">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl">
                        <h2 className="text-xl font-bold mb-6">إضافة منتج جديد</h2>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <input type="text" placeholder="اسم المنتج" className="w-full border-slate-200 rounded-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                            <input type="text" placeholder="الباركود" className="w-full border-slate-200 rounded-lg" value={formData.barcode} onChange={e => setFormData({...formData, barcode: e.target.value})} required />
                            <input type="number" placeholder="السعر" className="w-full border-slate-200 rounded-lg" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
                            <input type="number" placeholder="الكمية" className="w-full border-slate-200 rounded-lg" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} required />
                            <div className="flex gap-2">
                                <button type="submit" className="flex-1 bg-primary text-white py-2 rounded-lg font-bold">حفظ</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 bg-slate-100 py-2 rounded-lg font-bold">إلغاء</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;