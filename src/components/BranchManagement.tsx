"use client";

import React from 'react';

const BranchManagement = () => {
    return (
        <div className="bg-background text-on-background min-h-screen">
            {/* Side Navigation Shell */}
            <aside className="fixed right-0 top-0 h-full w-64 bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 flex flex-col z-50">
                <div className="p-6">
                    <div className="text-lg font-bold text-teal-900 dark:text-teal-200 headline">Kinetiq Retail</div>
                    <div className="text-xs text-slate-500 font-medium">Management System</div>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <a className="bg-teal-50 dark:bg-teal-900/20 text-teal-800 dark:text-teal-300 border-r-4 border-teal-700 flex items-center px-4 py-3 font-semibold transition-all duration-150 ease-in-out" href="#">
                        <span className="material-symbols-outlined ml-3">dashboard</span>
                        <span className="text-sm">Dashboard</span>
                    </a>
                    <a className="text-slate-600 dark:text-slate-400 flex items-center px-4 py-3 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-150 ease-in-out" href="#">
                        <span className="material-symbols-outlined ml-3">inventory_2</span>
                        <span className="text-sm">Inventory</span>
                    </a>
                    <a className="text-slate-600 dark:text-slate-400 flex items-center px-4 py-3 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-150 ease-in-out" href="#">
                        <span className="material-symbols-outlined ml-3">receipt_long</span>
                        <span className="text-sm">Sales</span>
                    </a>
                    <a className="text-slate-600 dark:text-slate-400 flex items-center px-4 py-3 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-150 ease-in-out" href="#">
                        <span className="material-symbols-outlined ml-3">leaderboard</span>
                        <span className="text-sm">Analytics</span>
                    </a>
                    <a className="text-slate-600 dark:text-slate-400 flex items-center px-4 py-3 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-150 ease-in-out" href="#">
                        <span className="material-symbols-outlined ml-3">settings</span>
                        <span className="text-sm">Settings</span>
                    </a>
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 px-2">
                        <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8O67SHDLzyslPjqUj8wcwPlrXa5olNPxIXKPvWEd1mfzNv0at-i-TpOfVLgtaYHrR7U6wkbna7ljQ4hlCKYdeX6OKmxYuBBFt0aRNI6vsr3J3rpr7co17pLP-BWq2YhRMLLfQfT_5WFf6yITmgTgYL6t6yM_SWgWC9BqhBNGXIXoEARkoHoRmPFQsB5mvH-eO3RW8WAv2xX8m0sROkAyIe7yDlJVkv-VJc6CqJNtiBCIvDq9KZ3DKgOtv7tzKl-y5SAZ9Bqd53Xg" alt="User profile" />
                        <div>
                            <div className="text-xs font-bold text-on-surface">أحمد المدير</div>
                            <div className="text-[10px] text-on-surface-variant">المدير العام</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="mr-64 p-8">
                {/* Top Navigation Area */}
                <header className="flex justify-between items-center mb-8 bg-white dark:bg-slate-900 px-6 h-16 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-extrabold text-teal-800 dark:text-teal-400 headline">مركز إدارة الفروع</h1>
                        <div className="h-6 w-[1px] bg-slate-200"></div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            <span className="text-sm font-medium">اليوم، ٢٤ مايو ٢٠٢٤</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="bg-surface-container-low border-none rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64" placeholder="بحث عن فرع..." type="text" />
                        </div>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                </header>

                {/* KPI Overview Bento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-primary text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-sm opacity-80 mb-1">إجمالي المبيعات اليومية</p>
                            <h3 className="text-2xl font-bold headline">٤٥,٨٢٠ ر.س</h3>
                            <div className="mt-4 flex items-center text-xs text-secondary-container">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span className="mr-1">+١٢٪ عن الأمس</span>
                            </div>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <span className="material-symbols-outlined text-8xl">payments</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-sm text-on-surface-variant mb-1">الفروع النشطة</p>
                        <h3 className="text-2xl font-bold headline text-primary">٨ / ٨</h3>
                        <div className="mt-4 flex items-center text-xs text-secondary">
                            <span className="material-symbols-outlined text-sm">check_circle</span>
                            <span className="mr-1">جميع الفروع متصلة</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-sm text-on-surface-variant mb-1">تنبيهات المخزون</p>
                        <h3 className="text-2xl font-bold headline text-error">١٢ منتج</h3>
                        <div className="mt-4 flex items-center text-xs text-error">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            <span className="mr-1">يتطلب إعادة طلب فورية</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-sm text-on-surface-variant mb-1">إجمالي الموظفين</p>
                        <h3 className="text-2xl font-bold headline text-primary">٦٤ موظف</h3>
                        <div className="mt-4 flex items-center text-xs text-primary">
                            <span className="material-symbols-outlined text-sm">groups</span>
                            <span className="mr-1">في الخدمة حالياً</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side: Map & Analytics */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map View Section */}
                        <section className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-primary headline">خريطة انتشار الفروع</h2>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                        الرياض
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                        جدة
                                    </span>
                                </div>
                            </div>
                            <div className="h-[400px] relative bg-slate-100">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hNgsjIYNa30CYiHbARJKCmsv7RPwxNpvHUFemAUGoMu0jpfjsTZ4QCX8w9RlY0_-EsAbBIRwytTDCd53v-Hzq1YQDW3aeBTSqQd0i-V2kCMQyFl55mioZb6PoJ5TYnRE9N1M76Z6PsdeQfwV3XLEUUB35HMvhxVwp7_BekD0O80aNyCrvekRTO7sX_9aqd0WL1Ev1myNydRgou76VoAdMvQ4kUuv7pu6bUXkPz53LfRVMHLjoXcoY8XpLDXtwhmPzzuqWE4gK-4" alt="Map View" />
                                {/* Custom Map Markers Overlay */}
                                <div className="absolute top-1/4 right-1/3 group cursor-pointer">
                                    <div className="bg-primary text-white p-2 rounded-lg shadow-xl flex items-center gap-2 transform transition-transform hover:scale-110">
                                        <span className="material-symbols-outlined text-xs">storefront</span>
                                        <span className="text-[10px] font-bold">الفرع الرئيسي</span>
                                    </div>
                                    <div className="w-0.5 h-4 bg-primary mx-auto"></div>
                                </div>
                                <div className="absolute bottom-1/3 left-1/4 group cursor-pointer">
                                    <div className="bg-secondary text-white p-2 rounded-lg shadow-xl flex items-center gap-2 transform transition-transform hover:scale-110">
                                        <span className="material-symbols-outlined text-xs">storefront</span>
                                        <span className="text-[10px] font-bold">فرع وسط المدينة</span>
                                    </div>
                                    <div className="w-0.5 h-4 bg-secondary mx-auto"></div>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Chart Section */}
                        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold text-primary headline">مقارنة مبيعات الفروع</h2>
                                <select className="text-sm border-slate-200 rounded-lg text-slate-600 focus:ring-primary">
                                    <option>آخر ٧ أيام</option>
                                    <option>الشهر الحالي</option>
                                </select>
                            </div>
                            <div className="space-y-4">
                                {/* Mock Bar Chart */}
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-medium">الفرع الرئيسي</span>
                                            <span className="text-primary font-bold">١٨,٤٠٠ ر.س</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-primary h-3 rounded-full" style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-medium">فرع وسط المدينة</span>
                                            <span className="text-primary font-bold">١٢,١٠٠ ر.س</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-secondary h-3 rounded-full" style={{width: '65%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-medium">فرع النخيل</span>
                                            <span className="text-primary font-bold">٩,٣٢٠ ر.س</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-tertiary-container h-3 rounded-full" style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-medium">فرع المطار</span>
                                            <span className="text-primary font-bold">٦,٠٠٠ ر.س</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-3">
                                            <div className="bg-primary-container h-3 rounded-full" style={{width: '30%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Branch Cards Grid */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-bold text-primary headline flex items-center gap-2 px-2">
                            <span className="material-symbols-outlined">hub</span>
                            نظرة سريعة على الفروع
                        </h2>

                        {/* Main Branch Card */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 border-r-4 border-r-primary">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-on-surface">الفرع الرئيسي</h3>
                                    <p className="text-xs text-slate-500">طريق الملك فهد، الرياض</p>
                                </div>
                                <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-1 rounded">مفتوح</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المبيعات</p>
                                    <p className="text-xs font-bold text-primary">١٨.٤ك</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المخزون</p>
                                    <p className="text-xs font-bold text-secondary">٩٤٪</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">الطاقم</p>
                                    <p className="text-xs font-bold text-on-surface">١٢</p>
                                </div>
                            </div>
                        </div>

                        {/* Downtown Branch Card */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 border-r-4 border-r-secondary">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-on-surface">فرع وسط المدينة</h3>
                                    <p className="text-xs text-slate-500">حي العليا، الرياض</p>
                                </div>
                                <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-1 rounded">مفتوح</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المبيعات</p>
                                    <p className="text-xs font-bold text-primary">١٢.١ك</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-error-container/20">
                                    <p className="text-[10px] text-slate-500 mb-1">المخزون</p>
                                    <p className="text-xs font-bold text-error">٤٢٪</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">الطاقم</p>
                                    <p className="text-xs font-bold text-on-surface">٨</p>
                                </div>
                            </div>
                        </div>

                        {/* Al-Nakheel Branch Card */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 border-r-4 border-r-tertiary-container">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-on-surface">فرع النخيل</h3>
                                    <p className="text-xs text-slate-500">طريق الثمامة، الرياض</p>
                                </div>
                                <span className="text-[10px] font-bold bg-slate-50 text-slate-500 px-2 py-1 rounded">مزدحم</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المبيعات</p>
                                    <p className="text-xs font-bold text-primary">٩.٣ك</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المخزون</p>
                                    <p className="text-xs font-bold text-secondary">٨٨٪</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">الطاقم</p>
                                    <p className="text-xs font-bold text-on-surface">١٠</p>
                                </div>
                            </div>
                        </div>

                        {/* Airport Branch Card */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 border-r-4 border-r-primary-container">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-on-surface">فرع المطار</h3>
                                    <p className="text-xs text-slate-500">صالة المغادرة ٣، الرياض</p>
                                </div>
                                <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-1 rounded">مفتوح</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المبيعات</p>
                                    <p className="text-xs font-bold text-primary">٦.٠ك</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">المخزون</p>
                                    <p className="text-xs font-bold text-secondary">٧٦٪</p>
                                </div>
                                <div className="text-center p-2 rounded-lg bg-surface-container-low">
                                    <p className="text-[10px] text-slate-500 mb-1">الطاقم</p>
                                    <p className="text-xs font-bold text-on-surface">٦</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="text-sm font-bold">إضافة فرع جديد</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Floating Action Button (FAB) - Suppression Logic: Included only for Dashboard context */}
            <button className="fixed bottom-8 left-8 bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-container transition-transform hover:scale-110 active:scale-95 z-50">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 0"}}>add</span>
            </button>
        </div>
    );
};

export default BranchManagement;