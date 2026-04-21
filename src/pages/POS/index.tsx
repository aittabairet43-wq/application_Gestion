import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db';
import { Product, CartItem } from '../../types';
import toast from 'react-hot-toast';

const POS = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        const res = dbService.exec("SELECT * FROM products WHERE quantity > 0");
        if (res.length > 0) {
            setProducts(res[0].values.map((row: any) => ({
                id: row[0], name: row[1], barcode: row[2], price: row[3], quantity: row[4], unit: row[5]
            })));
        }
    };

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                if (existing.cartQty >= product.quantity) {
                    toast.error('نفدت الكمية');
                    return prev;
                }
                return prev.map(item => item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item);
            }
            return [...prev, { ...product, cartQty: 1 }];
        });
        toast.success(`أضيف ${product.name}`);
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.cartQty), 0);

    const handleCheckout = async (method: string) => {
        if (cart.length === 0) return;
        const loadingToast = toast.loading('معالجة...');
        try {
            dbService.run("INSERT INTO sales (total, payment_method) VALUES (?, ?)", [total, method]);
            const saleId = Number(dbService.exec("SELECT last_insert_rowid()")[0].values[0][0]);
            cart.forEach(item => {
                dbService.run("INSERT INTO sale_items (sale_id, product_id, quantity, price) VALUES (?, ?, ?, ?)", [saleId, item.id, item.cartQty, item.price]);
                dbService.run("UPDATE products SET quantity = quantity - ? WHERE id = ?", [item.cartQty, item.id]);
            });
            await dbService.save();
            toast.dismiss(loadingToast);
            toast.success('تم بنجاح');
            setCart([]);
            loadProducts();
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error('فشلت العملية');
        }
    };

    return (
        <div className="flex gap-6 h-[calc(100vh-120px)]">
            <div className="flex-1 flex flex-col gap-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input type="text" placeholder="بحث..." className="w-full pr-12 pl-4 py-3 bg-white border-none rounded-xl shadow-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto custom-scrollbar">
                    {products.filter(p => p.name.includes(search)).map(product => (
                        <button key={product.id} onClick={() => addToCart(product)} className="bg-white p-4 rounded-xl border border-transparent hover:border-primary transition-all text-right group">
                            <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-4xl">inventory_2</span>
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm truncate">{product.name}</h4>
                            <p className="text-primary font-black mt-1">{product.price} ر.س</p>
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center gap-2 font-headline font-bold text-primary">
                    <span className="material-symbols-outlined">shopping_basket</span> سلة المشتريات
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <div className="flex-1">
                                <p className="text-xs font-bold text-slate-800">{item.name}</p>
                                <p className="text-[10px] text-slate-500 font-bold">{item.cartQty} × {item.price} ر.س</p>
                            </div>
                            <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-slate-300 hover:text-error"><span className="material-symbols-outlined text-lg">delete</span></button>
                        </div>
                    ))}
                </div>
                <div className="p-6 bg-primary-container text-white">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-bold opacity-80 uppercase">الإجمالي</span>
                        <span className="text-2xl font-black font-headline">{total.toFixed(2)} ر.س</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => handleCheckout('نقداً')} className="bg-secondary text-primary-container py-3 rounded-xl font-bold text-sm">نقدي</button>
                        <button onClick={() => handleCheckout('بطاقة')} className="bg-white/10 text-white border border-white/20 py-3 rounded-xl font-bold text-sm">بطاقة</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;