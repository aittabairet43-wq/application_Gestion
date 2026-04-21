"use client";

import React from 'react';

const CloudBackup = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-4 rtl text-right" dir="rtl">
            {/* Header Section */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-primary mb-2">إدارة النسخ الاحتياطي السحابي</h1>
                    <p className="text-slate-500">مراقبة وتأمين بيانات متجر Kinetiq Retail عبر منصة السحابية</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>sync</span>
                    <span>بدء مزامنة يدوية</span>
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-12 gap-6 mb-10">
                <div className="col-span-12 lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">استهلاك مساحة التخزين</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-primary">12.4</span>
                                <span className="text-lg font-bold text-slate-400 uppercase">GB</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-bold text-secondary-container bg-secondary/20 px-2 py-1 rounded">الحالة: مثالي</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">المساحة المستخدمة</span>
                            <span className="font-bold text-primary">62%</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '62%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-6">
                    <div className="bg-primary text-white p-6 rounded-xl shadow-md flex items-center justify-between border border-primary/20">
                        <div>
                            <p className="text-white/70 text-sm font-medium mb-1">آخر مزامنة ناجحة</p>
                            <h3 className="text-2xl font-bold">منذ 14 دقيقة</h3>
                        </div>
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm font-medium mb-1">المزامنة المجدولة القادمة</p>
                            <h3 className="text-2xl font-bold text-slate-800">اليوم، 12:00 م</h3>
                        </div>
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                            <span className="material-symbols-outlined text-3xl text-slate-400">update</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restore Points Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h2 className="text-xl font-bold text-primary">نقاط الاستعادة المتاحة</h2>
                    <select className="text-sm border-slate-200 rounded-lg bg-white px-4 py-2 focus:ring-primary">
                        <option>آخر 30 يوم</option>
                        <option>آخر 7 أيام</option>
                    </select>
                </div>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined">settings_backup_restore</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">نسخة احتياطية تلقائية #{8290 + i}</h4>
                                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> 22 أكتوبر 2023</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 08:00 ص</span>
                                        <span className="bg-slate-100 px-2 py-0.5 rounded">420 MB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-sm font-bold text-primary px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">تحميل</button>
                                <button className="text-sm font-bold bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all">استعادة</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CloudBackup;