"use client";

import React from 'react';

const BranchManagement = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Page Header */}
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-extrabold text-primary font-headline">مركز إدارة الفروع</h1>
                    <p className="text-slate-500 mt-1">إدارة كافة فروع المتجر، مراقبة المبيعات، وحالة المخزون.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="bg-white border border-slate-200 rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64 shadow-sm" placeholder="بحث عن فرع..." type="text" />
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>إضافة فرع</span>
                    </button>
                </div>
            </header>

            {/* KPI Overview Bento */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/10 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-sm opacity-80 mb-1">إجمالي المبيعات اليومية</p>
                        <h3 className="text-2xl font-bold font-headline">٤٥,٨٢٠ ر.س</h3>
                        <div className="mt-4 flex items-center text-xs text-secondary">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span className="mr-1">+١٢٪ عن الأمس</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">الفروع النشطة</p>
                    <h3 className="text-2xl font-bold font-headline text-primary">٨ / ٨</h3>
                    <div className="mt-4 flex items-center text-xs text-secondary-container">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span className="mr-1">جميع الفروع متصلة</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">تنبيهات المخزون</p>
                    <h3 className="text-2xl font-bold font-headline text-error">١٢ منتج</h3>
                    <div className="mt-4 flex items-center text-xs text-error">
                        <span className="material-symbols-outlined text-sm">warning</span>
                        <span className="mr-1">يتطلب إعادة طلب</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">إجمالي الموظفين</p>
                    <h3 className="text-2xl font-bold font-headline text-primary">٦٤ موظف</h3>
                    <div className="mt-4 flex items-center text-xs text-primary">
                        <span className="material-symbols-outlined text-sm">groups</span>
                        <span className="mr-1">في الخدمة حالياً</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Map & Analytics */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                            <h2 className="text-lg font-bold text-primary font-headline">خريطة انتشار الفروع</h2>
                        </div>
                        <div className="h-[400px] relative bg-slate-50 flex items-center justify-center">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-slate-200 text-8xl mb-4">map</span>
                                <p className="text-slate-400 font-medium font-headline">خريطة الفروع التفاعلية</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-primary font-headline mb-6">مقارنة مبيعات الفروع</h2>
                        <div className="space-y-6">
                            {[
                                { name: 'الفرع الرئيسي', amount: '١٨,٤٠٠', percent: '85', color: 'bg-primary' },
                                { name: 'فرع وسط المدينة', amount: '١٢,١٠٠', percent: '65', color: 'bg-secondary' },
                                { name: 'فرع النخيل', amount: '٩,٣٢٠', percent: '45', color: 'bg-orange-400' }
                            ].map((branch, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold text-slate-700">{branch.name}</span>
                                        <span className="text-primary font-black">{branch.amount} ر.س</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                                        <div className={`${branch.color} h-2.5 rounded-full transition-all duration-1000`} style={{width: `${branch.percent}%`}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Side: Branch Cards */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 px-2">
                        <span className="material-symbols-outlined">hub</span>
                        قائمة الفروع
                    </h2>

                    <BranchCard name="الفرع الرئيسي" location="طريق الملك فهد، الرياض" status="مفتوح" sales="١٨.٤ك" stock="٩٤٪" staff="١٢" color="border-primary" />
                    <BranchCard name="فرع وسط المدينة" location="حي العليا، الرياض" status="مفتوح" sales="١٢.١ك" stock="٤٢٪" staff="٨" color="border-secondary" />
                    <BranchCard name="فرع النخيل" location="طريق الثمامة، الرياض" status="مزدحم" sales="٩.٣ك" stock="٨٨٪" staff="١٠" color="border-orange-400" />
                </div>
            </div>
        </div>
    );
};

const BranchCard = ({ name, location, status, sales, stock, staff, color }: any) => (
    <div className={`bg-white rounded-xl border border-slate-100 shadow-sm p-5 border-r-4 ${color}`}>
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="font-bold text-slate-800">{name}</h3>
                <p className="text-xs text-slate-400">{location}</p>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded ${status === 'مفتوح' ? 'bg-teal-50 text-secondary' : 'bg-orange-50 text-tertiary'}`}>{status}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 rounded-lg bg-slate-50">
                <p className="text-[10px] text-slate-400 mb-1">المبيعات</p>
                <p className="text-xs font-bold text-primary">{sales}</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-slate-50">
                <p className="text-[10px] text-slate-400 mb-1">المخزون</p>
                <p className="text-xs font-bold text-slate-700">{stock}</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-slate-50">
                <p className="text-[10px] text-slate-400 mb-1">الطاقم</p>
                <p className="text-xs font-bold text-slate-700">{staff}</p>
            </div>
        </div>
    </div>
);

export default BranchManagement;