"use client";

import React, { useState } from 'react';

const POS = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        { id: 1, name: 'حليب المراعي 2 لتر', price: 11.00, barcode: '6281234', category: 'ألبان' },
        { id: 2, name: 'خبز صامولي 6 حبات', price: 1.50, barcode: '6285566', category: 'مخبوزات' },
        { id: 3, name: 'مياه هنا 330 مل', price: 0.50, barcode: '6289900', category: 'مشروبات' },
        { id: 4, name: 'أرز بسمتي 5 كجم', price: 45.00, barcode: '6284433', category: 'معلبات' },
    ];

    const addToCart = (product: any) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="flex h-[calc(100vh-8rem)] gap-6 rtl" dir="rtl">
            {/* Products Selection Area */}
            <div className="flex-1 flex flex-col gap-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input 
                            className="w-full pr-10 pl-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" 
                            placeholder="ابحث بالاسم أو الباركود (F1)..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="bg-primary-container text-white p-3 rounded-lg shadow-md hover:brightness-110 transition-all">
                        <span className="material-symbols-outlined">qr_code_scanner</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {products.filter(p => p.name.includes(searchQuery)).map(product => (
                            <button 
                                key={product.id}
                                onClick={() => addToCart(product)}
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-primary hover:shadow-md transition-all text-right flex flex-col gap-3 group active:scale-95"
                            >
                                <div className="w-full aspect-square bg-slate-50 rounded-lg flex items-center justify-center border border-slate-50 group-hover:bg-primary/5">
                                    <span className="material-symbols-outlined text-4xl text-slate-200 group-hover:text-primary/40 transition-colors">inventory_2</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm truncate">{product.name}</p>
                                    <p className="text-primary font-black mt-1">{product.price.toFixed(2)} <span className="text-[10px]">ر.س</span></p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cart & Checkout Area */}
            <div className="w-96 bg-white rounded-xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <h3 className="font-bold text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                        سلة البيع
                    </h3>
                    <button onClick={() => setCart([])} className="text-xs font-bold text-error hover:underline">مسح الكل</button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-2 opacity-50">
                            <span className="material-symbols-outlined text-6xl">shopping_basket</span>
                            <p className="text-sm font-bold">السلة فارغة</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg group">
                                <div className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center text-xs font-bold">
                                    {item.qty}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-800 truncate">{item.name}</p>
                                    <p className="text-[10px] text-slate-500">{(item.price * item.qty).toFixed(2)} ر.س</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="p-1 text-slate-300 hover:text-error transition-colors">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-slate-500 font-bold">
                            <span>المجموع الفرعي</span>
                            <span>{(total * 0.85).toFixed(2)} ر.س</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 font-bold">
                            <span>الضريبة (15%)</span>
                            <span>{(total * 0.15).toFixed(2)} ر.س</span>
                        </div>
                        <div className="flex justify-between text-xl font-black text-primary pt-2 border-t border-slate-200">
                            <span>الإجمالي</span>
                            <span>{total.toFixed(2)} ر.س</span>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined">payments</span>
                        إتمام الدفع (F2)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default POS;