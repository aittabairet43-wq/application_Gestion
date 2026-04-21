"use client";

import React from 'react';

const CashLogs = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Header Section */}
            <header className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="text-2xl font-black text-teal-800 font-headline">تفاصيل حركة الصندوق</h1>
                    <p className="text-slate-500 text-sm mt-1">سجل المراجعة التفصيلي لجميع التدفقات النقدية للصندوق.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative w-64">
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input className="w-full pr-10 pl-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-primary outline-none shadow-sm" placeholder="البحث عن عملية..." type="text"/>
                    </div>
                </div>
            </header>

            {/* Summary Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Cash In */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between overflow-hidden relative group shadow-sm">
                    <div className="z-10">
                        <span className="text-sm font-medium text-slate-500 block mb-1">إجمالي الواردات</span>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-3xl font-extrabold text-teal-900">45,280.00</h2>
                            <span className="text-xs font-bold text-teal-600">ر.س</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-secondary font-bold">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span>+12.4% عن الشهر الماضي</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl">payments</span>
                    </div>
                </div>
                {/* Total Cash Out */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between overflow-hidden relative group shadow-sm">
                    <div className="z-10">
                        <span className="text-sm font-medium text-slate-500 block mb-1">إجمالي الصادرات</span>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-3xl font-extrabold text-error">12,150.50</h2>
                            <span className="text-xs font-bold text-error">ر.س</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-error font-bold">
                        <span className="material-symbols-outlined text-sm">trending_down</span>
                        <span>-4.2% عن الشهر الماضي</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
                    </div>
                </div>
                {/* Net Balance */}
                <div className="bg-primary-container p-6 rounded-xl border border-primary text-white flex flex-col justify-between overflow-hidden relative group shadow-lg shadow-primary/10">
                    <div className="z-10">
                        <span className="text-sm font-medium text-white/80 block mb-1">صافي الرصيد</span>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-3xl font-extrabold">33,129.50</h2>
                            <span className="text-xs font-bold text-white/80">ر.س</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-white/80 font-medium">
                        <span className="material-symbols-outlined text-sm">account_balance</span>
                        <span>الرصيد المتاح حالياً في الصندوق</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-8xl" style={{fontVariationSettings: "'FILL' 1"}}>savings</span>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-teal-900">اتجاهات التدفق النقدي</h3>
                        <p className="text-xs text-slate-500">مقارنة الواردات والصادرات اليومية لآخر 7 أيام</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                            <span className="text-xs font-bold text-slate-700">واردات</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-error"></span>
                            <span className="text-xs font-bold text-slate-700">صادرات</span>
                        </div>
                    </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-4 px-4 border-b border-l border-slate-100 relative pt-4">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-px">
                        {[1, 2, 3, 4].map((i) => <div key={i} className="w-full border-t border-slate-50"></div>)}
                    </div>
                    {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'].map((day, i) => (
                        <div key={day} className="flex-1 flex flex-col items-center gap-1 z-10 group">
                            <div className="w-full flex justify-center gap-1 h-full items-end">
                                <div className="w-4 bg-primary-container rounded-t-sm opacity-80 group-hover:opacity-100 transition-all" style={{ height: `${30 + i * 10}%` }}></div>
                                <div className="w-4 bg-error rounded-t-sm opacity-80 group-hover:opacity-100 transition-all" style={{ height: `${10 + (i % 3) * 15}%` }}></div>
                            </div>
                            <span className="text-[10px] mt-2 font-bold text-slate-400">{day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-lg font-bold text-teal-900">سجل العمليات الأخير</h3>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                            <span className="material-symbols-outlined text-sm">filter_list</span>
                            تصفية
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                            <span className="material-symbols-outlined text-sm">download</span>
                            تصدير Excel
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                                <th className="px-6 py-4">النوع</th>
                                <th className="px-6 py-4">المبلغ</th>
                                <th className="px-6 py-4">المصدر/الوجهة</th>
                                <th className="px-6 py-4">التاريخ والوقت</th>
                                <th className="px-6 py-4">الموظف المسؤول</th>
                                <th className="px-6 py-4">الإجراء</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                        <span className="text-sm font-bold text-slate-700">مبيعات نقدية</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-black text-teal-700">+450.00 ر.س</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">نقطة بيع 01</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">2023/10/24 - 14:20</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">AA</div>
                                        <span className="text-xs font-bold text-slate-700">أحمد علي</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-slate-400 hover:text-teal-700 transition-colors">
                                        <span className="material-symbols-outlined text-lg">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-error"></span>
                                        <span className="text-sm font-bold text-slate-700">دفع للمورد</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-black text-error">-1,200.00 ر.س</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">شركة الخليج للتوريد</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">2023/10/24 - 11:45</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] text-white font-bold">SM</div>
                                        <span className="text-xs font-bold text-slate-700">سارة محمود</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-slate-400 hover:text-teal-700 transition-colors">
                                        <span className="material-symbols-outlined text-lg">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-slate-100 flex justify-between items-center bg-white">
                    <span className="text-xs text-slate-500 font-bold">عرض 1-10 من أصل 124 عملية</span>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-black shadow-md">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashLogs;