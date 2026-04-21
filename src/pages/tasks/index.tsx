"use client";

import React from 'react';

const DailyTasks = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-4 rtl text-right" dir="rtl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-primary mb-1">المهام اليومية</h1>
                    <p className="text-slate-500">إدارة وتكليف المهام لفريق العمل لليوم</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                    <span className="material-symbols-outlined">add_task</span>
                    إضافة مهمة جديدة
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <span className="material-symbols-outlined">list_alt</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">إجمالي المهام</p>
                        <h3 className="text-2xl font-bold text-slate-900">24</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                        <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">قيد التنفيذ</p>
                        <h3 className="text-2xl font-bold text-slate-900">08</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <span className="material-symbols-outlined">task_alt</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">مكتملة</p>
                        <h3 className="text-2xl font-bold text-slate-900">12</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                        <span className="material-symbols-outlined">priority_high</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">عاجلة</p>
                        <h3 className="text-2xl font-bold text-slate-900">04</h3>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-lg font-bold text-primary">قائمة المهام النشطة</h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-5 flex items-center gap-6 hover:bg-slate-50 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">{i}</div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-bold text-slate-900">جرد القسم رقم {i} وتحديث الملصقات</h4>
                                    <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-600 text-[10px] font-bold">عاجل</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-slate-400">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 11:00 صباحاً</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> الموظف المسند إليه</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-3/4"></div>
                                </div>
                                <span className="text-xs font-bold text-primary">75%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DailyTasks;