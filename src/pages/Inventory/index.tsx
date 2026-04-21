import React, { useState, useEffect } from 'react';
import dbService from '../../../services/db';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', barcode: '', price: '', quantity: '', unit: 'قطعة' });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        const res = dbService.exec("SELECT * FROM products ORDER BY id DESC");
        if (res.length > 0) {
            const rows = res[0].values.map(row => ({
                id: row[0], name: row[1], barcode: row[2], price: row[3], quantity: row[4], unit: row[5]
            }));
            setProducts(rows);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            dbService.run(
                "INSERT INTO products (name, barcode, price, quantity, unit) VALUES (?, ?, ?, ?, ?)",
                [formData.name, formData.barcode, formData.price, formData.quantity, formData.unit]
            );
            await dbService.save();
            setShowAddModal(false);
            setFormData({ name: '', barcode: '', price: '', quantity: '', unit: 'قطعة' });
            loadProducts();
        } catch (err) {
            alert("حدث خطأ أثناء إضافة المنتج");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 font-headline">إدارة المخزون</h1>
                    <p className="text-slate-500 mt-1">عرض وتعديل بيانات المنتجات ومراقبة مستويات المخزون</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-primary/10"
                >
                    <span className="material-symbols-outlined text-lg">add_box</span>
                    إضافة منتج جديد
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-right border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black border-b border-slate-100">
                            <th className="px-8 py-5">المنتج</th>
                            <th className="px-8 py-5">الباركود</th>
                            <th className="px-8 py-5">السعر</th>
                            <th className="px-8 py-5">الكمية</th>
                            <th className="px-8 py-5 text-center">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.map(product => (
                            <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-8 py-5">
                                    <p className="font-bold text-slate-800 text-sm">{product.name}</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">ID: #{product.id}</p>
                                </td>
                                <td className="px-8 py-5 font-mono text-xs text-slate-500">{product.barcode || '---'}</td>
                                <td className="px-8 py-5 font-black text-primary text-sm">{product.price} ر.س</td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-bold ${product.quantity < 10 ? 'text-error' : 'text-slate-700'}`}>
                                            {product.quantity}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-medium">{product.unit}</span>
                                        {product.quantity < 10 && (
                                            <span className="material-symbols-outlined text-error text-sm animate-pulse" title="مخزون منخفض">warning</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-center">
                                    <button className="p-2 text-slate-300 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                                    <button className="p-2 text-slate-300 hover:text-error transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                            <h3 className="text-xl font-black text-primary">إضافة منتج جديد</h3>
                            <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">close</span></button>
                        </div>
                        <form onSubmit={handleAddProduct} className="p-8 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="text-xs font-bold text-outline mb-1 block uppercase">اسم المنتج</label>
                                    <input type="text" required className="w-full border-slate-200 rounded-lg text-sm" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-outline mb-1 block uppercase">الباركود</label>
                                    <input type="text" className="w-full border-slate-200 rounded-lg text-sm font-mono" value={formData.barcode} onChange={e => setFormData({ ...formData, barcode: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-outline mb-1 block uppercase">الوحدة</label>
                                    <select className="w-full border-slate-200 rounded-lg text-sm" value={formData.unit} onChange={e => setFormData({ ...formData, unit: e.target.value })}>
                                        <option>قطعة</option><option>كجم</option><option>جرام</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-outline mb-1 block uppercase">السعر</label>
                                    <input type="number" step="0.01" required className="w-full border-slate-200 rounded-lg text-sm font-black" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-outline mb-1 block uppercase">الكمية الابتدائية</label>
                                    <input type="number" required className="w-full border-slate-200 rounded-lg text-sm" value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:brightness-110 transition-all mt-6">حفظ المنتج في المخزون</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;