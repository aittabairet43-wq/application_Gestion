"use client";

import React from 'react';

const DebtDetails = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-4 rtl text-right" dir="rtl">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-primary mb-1">مديونيات العملاء والموردين</h1>
                    <p className="text-slate-500">تتبع الدفعات والديون المستحقة</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-8 min-w-[320px]">
                    <div className="flex-1">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">إجمالي المديونية</p>
                        <p className="text-2xl font-black text-error">4,250.00 ر.س</p>
                    </div>
                    <div className="w-px h-12 bg-slate-100"></div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">آخر دفعة محصلة</p>
                        <p className="text-lg font-bold text-secondary-container">500.00 ر.س</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">add_card</span>
                            تسجيل دفعة جديدة
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-1">المبلغ (ر.س)</label>
                                <input className="w-full bg-slate-50 border-slate-200 rounded-lg p-3 text-lg font-bold focus:ring-primary" placeholder="0.00" type="number"/>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-1">تاريخ الدفع</label>
                                <input className="w-full bg-slate-50 border-slate-200 rounded-lg p-3 focus:ring-primary" type="date"/>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-md hover:brightness-110 transition-all" type="submit">
                                تأكيد العملية
                            </button>
                        </form>
                    </section>
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-primary">سجل المعاملات المالية</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4">التاريخ</th>
                                        <th className="px-6 py-4">النوع</th>
                                        <th className="px-6 py-4">الوصف</th>
                                        <th className="px-6 py-4">المبلغ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm">12 نوفمبر 2023</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">دفعة مسددة</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">تحويل بنكي - الراجحي</td>
                                        <td className="px-6 py-4 font-bold text-secondary-container">500.00 ر.س</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DebtDetails;