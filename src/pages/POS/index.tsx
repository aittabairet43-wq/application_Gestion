import React, { useState, useEffect } from 'react';
import { dbService } from '../../../services/db';
import toast from 'react-hot-toast';

const POS = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        const res = dbService.exec("SELECT * FROM products WHERE quantity > 0");
        if (res.length > 0) {
            const rows = res[0].values.map(row => ({
                id: row[0], name: row[1], barcode: row[2], price: row[3], quantity: row[4], unit: row[5]
            }));
            setProducts(rows);
        }
    };

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                if (existing.cartQty >= product.quantity) {
                    toast.error('عذراً، نفدت الكمية المتوفرة');
                    return prev;
                }
                return prev.map(item => item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item);
            }
            return [...prev, { ...product, cartQty: 1 }];
        });
        toast.success(`تمت إضافة ${product.name}`);
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.cartQty), 0);

    const handleCheckout = async (method) => {
        if (cart.length === 0) {
            toast.error('السلة فارغة!');
            return;
        }

        const loadingToast = toast.loading('جاري معالجة الطلب...');

        try {
            dbService.run("INSERT INTO sales (total, payment_method) VALUES (?, ?)", [total, method]);
            const saleIdRes = dbService.exec("SELECT last_insert_rowid()");
            const saleId = saleIdRes[0].values[0][0];

            cart.forEach(item => {
                dbService.run("INSERT INTO sale_items (sale_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
                    [saleId, item.id, item.cartQty, item.price]);
                dbService.run("UPDATE products SET quantity = quantity - ? WHERE id = ?", [item.cartQty, item.id]);
            });

            await dbService.save();
            
            toast.dismiss(loadingToast);
            toast.success('تمت عملية البيع بنجاح!');
            
            setCart([]);
            loadProducts();
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error('حدث خطأ أثناء تنفيذ العملية');
        }
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
        toast.success('تم الحذف من السلة');
    };

    return (
        <div className="flex gap-6 h-[calc(100vh-120px)]">
            {/* Products Area */}
            <div className="flex-1 flex flex-col gap-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="ابحث باسم المنتج أو الباركود..."
                        className="w-full pr-12 pl-4 py-3 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pr-2 custom-scrollbar">
                    {products.filter(p => p.name.includes(search) || p.barcode?.includes(search)).map(product => (
                        <button
                            key={product.id}
                            onClick={() => addToCart(product)}
                            className="bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-primary transition-all text-right group active:scale-95"
                        >
                            <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-4xl">inventory_2</span>
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm truncate">{product.name}</h4>
                            <p className="text-primary font-black mt-1">{product.price.toLocaleString()} ر.س</p>
                            <p className="text-[10px] text-slate-400 mt-1 font-bold">المخزون: {product.quantity} {product.unit}</p>
                        </button>
                    ))}
                    {products.length === 0 && (
                        <div className="col-span-full py-20 text-center text-slate-400 italic">لا توجد منتجات في المخزون حالياً</div>
                    )}
                </div>
            </div>

            {/* Cart Area */}
            <div className="w-96 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                    <h3 className="font-black text-primary flex items-center gap-2 font-headline">
                        <span className="material-symbols-outlined">shopping_basket</span>
                        سلة المشتريات
                    </h3>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100 group">
                            <div className="flex-1">
                                <p className="text-xs font-bold text-slate-800">{item.name}</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase">{item.cartQty} × {item.price} ر.س</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-sm font-black text-primary">{(item.price * item.cartQty).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-error transition-colors">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                    {cart.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 opacity-50 py-10">
                            <span className="material-symbols-outlined text-6xl mb-2">shopping_cart_checkout</span>
                            <p className="text-sm font-bold">السلة فارغة</p>
                        </div>
                    )}
                </div>

                <div className="p-6 bg-primary-container text-white">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-bold opacity-80 uppercase tracking-widest">الإجمالي النهائي</span>
                        <span className="text-2xl font-black font-headline">{total.toLocaleString(undefined, { minimumFractionDigits: 2 })} ر.س</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => handleCheckout('نقداً')} 
                            className="bg-secondary text-primary-container py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-secondary/10"
                        >
                            دفع نقدي
                        </button>
                        <button 
                            onClick={() => handleCheckout('بطاقة')} 
                            className="bg-white/10 text-white border border-white/20 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all"
                        >
                            بطاقة مدى
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;