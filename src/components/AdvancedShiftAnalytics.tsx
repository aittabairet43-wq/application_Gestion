"use client";

import React from 'react';

const AdvancedShiftAnalytics = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Header Section */}
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-primary mb-2 font-headline">إحصائيات الورديات المتقدمة</h1>
                    <p className="text-slate-500 font-medium">تحليل شامل لأداء الورديات، المبيعات القصوى، وتدفقات النقد.</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: 20}}>calendar_today</span>
                        <span className="text-sm font-semibold">آخر 30 يوم</span>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">download</span>
                        <span>تصدير البيانات</span>
                    </button>
                </div>
            </header>

            {/* Bento Grid Dashboard */}
            <div className="grid grid-cols-12 gap-6">
                {/* Key Metrics */}
                <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary-container">
                            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                        </div>
                        <span className="text-xs font-bold bg-secondary/20 text-secondary-container px-2 py-1 rounded">+12%</span>
                    </div>
                    <h3 className="text-sm text-slate-500 font-semibold mb-1">إجمالي ساعات العمل</h3>
                    <p className="text-3xl font-black text-primary">1,248 ساعة</p>
                    <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                        معدل 41.6 ساعة لكل موظف شهرياً
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
                        </div>
                        <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">مستقر</span>
                    </div>
                    <h3 className="text-sm text-slate-500 font-semibold mb-1">متوسط رصيد الصندوق</h3>
                    <p className="text-3xl font-black text-primary">15,420 ر.س</p>
                    <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                        نسبة التباين في الصندوق: 0.02%
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
                        </div>
                        <span className="text-xs font-bold bg-orange-100 text-tertiary px-2 py-1 rounded">ذروة</span>
                    </div>
                    <h3 className="text-sm text-slate-500 font-semibold mb-1">أكثر الساعات مبيعاً</h3>
                    <p className="text-3xl font-black text-primary">08:00 م - 10:00 م</p>
                    <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                        الوردية المسائية تساهم بـ 65% من الدخل
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="col-span-12 lg:col-span-8 bg-white border border-slate-100 p-8 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-primary flex items-center gap-2 font-headline">
                            <span className="material-symbols-outlined">bar_chart</span>
                            مقارنة أداء مدراء الورديات
                        </h2>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-xs font-bold">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span>أحمد (الصباحية)</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold">
                                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                <span>سارة (المسائية)</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 flex items-end gap-6 px-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: `${40 + i * 10}%`}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: `${30 + i * 12}%`}}></div>
                                </div>
                                <span className="text-xs font-bold text-slate-400">اليوم {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cash History */}
                <div className="col-span-12 lg:col-span-4 bg-primary text-white p-8 rounded-xl relative overflow-hidden shadow-lg shadow-primary/20">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 font-headline">
                        <span className="material-symbols-outlined">history</span>
                        تاريخ رصيد الصندوق
                    </h2>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary">check_circle</span>
                                <span className="text-sm font-medium">الوردية الصباحية</span>
                            </div>
                            <span className="font-bold">4,200 ر.س</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary">check_circle</span>
                                <span className="text-sm font-medium">الوردية المسائية</span>
                            </div>
                            <span className="font-bold">11,220 ر.س</span>
                        </div>
                    </div>
                    <button className="w-full mt-8 bg-white text-primary py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors active:scale-95">
                        مراجعة جميع الفروقات
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvancedShiftAnalytics;