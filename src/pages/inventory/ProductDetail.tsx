import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full rtl" dir="rtl">
            <div className="flex justify-between items-center mb-2">
                <nav className="flex items-center gap-2 text-sm text-slate-400">
                    <span onClick={() => navigate('/inventory')} className="hover:text-primary cursor-pointer">المخزون</span>
                    <span className="material-symbols-outlined text-xs">chevron_left</span>
                    <span className="text-on-surface font-semibold">تفاصيل المنتج</span>
                </nav>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:brightness-110 transition-all text-sm font-bold">
                        <span className="material-symbols-outlined text-lg">edit</span>
                        <span>تعديل الصنف</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Product Identity */}
                <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
                    <div className="aspect-square bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
                        <span className="material-symbols-outlined text-6xl text-slate-200">image</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-primary font-headline">زينث X1 - النسخة الفاخرة</h1>
                        <p className="text-sm text-slate-400 mt-1">SKU: KNT-88902-X1 | الباركود: 628123456789</p>
                        <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4">
                            <div>
                                <p className="text-xs text-slate-400 mb-1">سعر البيع</p>
                                <p className="text-xl font-bold text-primary">4,500.00 ر.س</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-1">إجمالي المخزون</p>
                                <p className="text-xl font-bold text-slate-700">1,248 وحدة</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats & Charts */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">show_chart</span>
                            تتبع تاريخ الأسعار
                        </h3>
                        <div className="h-32 bg-slate-50 rounded-lg flex items-end p-4 gap-2">
                            {[40, 60, 45, 90, 65, 80, 70].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-400">rebase_edit</span>
                            معدل دوران المخزون
                        </h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-primary">8.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;