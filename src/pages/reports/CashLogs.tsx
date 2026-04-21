"use client";

import React from 'react';

const CashLogs = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Header & Breadcrumbs */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <nav className="flex text-xs text-slate-400 mb-2 gap-2">
                        <span>الرئيسية</span>
                        <span className="material-symbols-outlined text-[12px]">chevron_left</span>
                        <span>التقارير</span>
                        <span className="material-symbols-outlined text-[12px]">chevron_left</span>
                        <span className="text-primary font-bold">حركة الصندوق</span>
                    </nav>
                    <h1 className="text-3xl font-extrabold text-[#005B71]">حركة الصندوق</h1>
                    <p className="text-slate-500 mt-1">سجل المراجعة التفصيلي لجميع التدفقات النقدية للصندوق الحالي.</p>
                </div>
                <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col px-3">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">الوردية الحالية</span>
                        <span className="text-xs font-bold text-slate-700">وردية المساء - م. أحمد</span>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-200"></div>
                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-sm">print</span>
                        طباعة التقرير
                    </button>
                </div>
            </header>

            {/* Bento Grid Summary */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Balance Card */}
                <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#005B71] to-[#004253] p-6 rounded-2xl text-white shadow-lg flex flex-col justify-between overflow-hidden relative group">
                    <div className="relative z-10">
                        <p className="text-teal-200 text-sm font-medium">الرصيد الحالي في الصندوق</p>
                        <h2 className="text-4xl font-black mt-2">12,450.00 <span className="text-lg font-normal opacity-80">ر.س</span></h2>
                    </div>
                    <div className="relative z-10 flex items-center justify-between mt-8">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-teal-300 text-sm">history</span>
                            <span className="text-xs opacity-90">آخر تحديث: منذ دقيقتين</span>
                        </div>
                        <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold transition-all border border-white/20">
                            تسوية الصندوق
                        </button>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-white/5 text-9xl pointer-events-none group-hover:scale-110 transition-transform duration-500">account_balance_wallet</span>
                </div>
                {/* Total In */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#98FFD9] transition-all">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
                        </div>
                        <span className="text-[10px] bg-teal-50 text-secondary font-bold px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <div className="mt-4">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">إجمالي الداخل (مبيعات)</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">8,230.00 <span className="text-xs font-normal opacity-60">ر.س</span></h3>
                    </div>
                </div>
                {/* Total Out */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#F4A261] transition-all">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>trending_down</span>
                        </div>
                        <span className="text-[10px] bg-orange-50 text-tertiary font-bold px-2 py-1 rounded-full">-5%</span>
                    </div>
                    <div className="mt-4">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">إجمالي الخارج (مصاريف)</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">1,420.50 <span className="text-xs font-normal opacity-60">ر.س</span></h3>
                    </div>
                </div>
            </section>

            {/* Audit Trail / Log Section */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">filter_list</span>
                        <span className="text-sm font-bold text-slate-700">تصفية السجل:</span>
                        <div className="flex gap-2 mr-2">
                            <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">الكل</button>
                            <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">مبيعات نقدية</button>
                            <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">مرتجع</button>
                            <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">مصاريف</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input className="pr-10 pl-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64" placeholder="البحث عن عملية..." type="text"/>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-sm">search</span>
                        </div>
                        <button className="material-symbols-outlined p-2 text-slate-400 hover:text-primary transition-all">download</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead>
                            <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                                <th className="px-6 py-4">المرجع</th>
                                <th className="px-6 py-4">الوقت</th>
                                <th className="px-6 py-4">النوع</th>
                                <th className="px-6 py-4">الوصف</th>
                                <th className="px-6 py-4">بواسطة</th>
                                <th className="px-6 py-4">القيمة</th>
                                <th className="px-6 py-4">الرصيد التراكمي</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4"><span className="text-xs font-bold text-slate-500">#INV-8892</span></td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-700">14:45</span>
                                        <span className="text-[10px] text-slate-400">اليوم</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-secondary text-[10px] font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> مبيعات نقدية
                                    </span>
                                </td>
                                <td className="px-6 py-4"><span className="text-xs text-slate-600">فاتورة رقم #1229 - منتجات متنوعة</span></td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white">SA</div>
                                        <span className="text-xs font-medium text-slate-700">سارة علي</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4"><span className="text-sm font-black text-secondary">+125.50</span></td>
                                <td className="px-6 py-4 font-bold text-slate-700 text-sm">12,450.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default CashLogs;