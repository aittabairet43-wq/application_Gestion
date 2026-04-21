"use client";

import React from 'react';

const AdvancedShiftAnalytics = () => {
    return (
        <div className="bg-background text-on-background min-h-screen">
            {/* TopNavBar */}
            <header className="fixed top-0 right-0 left-0 z-40 flex justify-between items-center px-6 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-black text-teal-900 dark:text-teal-50">RetailMaster Pro</span>
                    <nav className="hidden md:flex gap-6 items-center h-full pt-4">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-colors">الرئيسية</a>
                        <a className="text-teal-900 dark:text-teal-400 border-b-2 border-teal-900 dark:border-teal-400 pb-1 font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-colors">إحصائيات الورديات</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-colors">الموظفون</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-lg active:scale-95 duration-150">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-lg active:scale-95 duration-150">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm active:scale-95 transition-transform">
                        New Sale
                    </button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4Drjy-nI4X7L4cwyq2XRjiaYveWVYbeDDHloVbEG9d4GuNi2g1ALBr2xtHbNyuIa9NkK0fN-SgmoMQqXPTiiknZWKsL5bHa20Fdf0YzswWu6H-NrL6yeNZ3WnvqGmBqcYOWo5wTLXrnVMwmRelZNIRHSkH5T1zt7dQ0ESw9UTIhXV1DdxIIG1sHEHtmZ1DDLmHNDh6qeIDefJ3LU2IF6h7G2fmq7tNLThwHlSej5iFGdulQQVeipApBN9j7sBwM_uj0CntdcRhU" alt="User profile" />
                    </div>
                </div>
            </header>

            {/* SideNavBar */}
            <aside className="fixed right-0 top-0 bottom-0 flex flex-col p-4 gap-2 w-64 z-50 bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8 px-2">
                    <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">point_of_sale</span>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-teal-900 dark:text-teal-50">RetailMaster</div>
                        <div className="text-xs text-slate-500 font-medium">Enterprise Edition</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-1 flex-1">
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer hover:translate-x-1">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-medium text-sm">Dashboard</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer hover:translate-x-1">
                        <span className="material-symbols-outlined">inventory_2</span>
                        <span className="font-medium text-sm">Inventory</span>
                    </div>
                    <div className="bg-teal-900 text-white dark:bg-teal-800 rounded-lg shadow-md p-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer">
                        <span className="material-symbols-outlined">monitoring</span>
                        <span className="font-medium text-sm">Analytics</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer hover:translate-x-1">
                        <span className="material-symbols-outlined">point_of_sale</span>
                        <span className="font-medium text-sm">POS System</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer hover:translate-x-1">
                        <span className="material-symbols-outlined">admin_panel_settings</span>
                        <span className="font-medium text-sm">Administration</span>
                    </div>
                </nav>
                <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 pt-4">
                    <button className="w-full bg-primary-container text-white py-2 rounded-lg mb-4 text-sm font-semibold active:scale-95 transition-transform">
                        Generate Report
                    </button>
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 cursor-pointer">
                        <span className="material-symbols-outlined">contact_support</span>
                        <span className="font-medium text-sm">Support</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg p-3 flex items-center gap-3 cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="font-medium text-sm">Settings</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Canvas */}
            <main className="mr-64 mt-16 p-8 min-h-[calc(100vh-4rem)]">
                {/* Header Section */}
                <header className="mb-10 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black text-primary mb-2">إحصائيات الورديات المتقدمة</h1>
                        <p className="text-on-surface-variant font-medium">تحليل شامل لأداء الورديات، المبيعات القصوى، وتدفقات النقد.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-surface-container border border-outline-variant px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary" style={{fontSize: 20}}>calendar_today</span>
                            <span className="text-sm font-semibold">آخر 30 يوم</span>
                        </div>
                        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-md">
                            <span className="material-symbols-outlined">download</span>
                            <span>تصدير البيانات</span>
                        </button>
                    </div>
                </header>

                {/* Bento Grid Dashboard */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Key Metrics (Asymmetric Row) */}
                    <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center text-on-secondary-container">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                            </div>
                            <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-1 rounded">+12%</span>
                        </div>
                        <h3 className="text-sm text-on-surface-variant font-semibold mb-1">إجمالي ساعات العمل</h3>
                        <p className="text-3xl font-black text-primary">1,248 ساعة</p>
                        <div className="mt-4 pt-4 border-t border-surface-container text-xs text-outline font-medium">
                            معدل 41.6 ساعة لكل موظف شهرياً
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
                            </div>
                            <span className="text-xs font-bold bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded">مستقر</span>
                        </div>
                        <h3 className="text-sm text-on-surface-variant font-semibold mb-1">متوسط رصيد الصندوق</h3>
                        <p className="text-3xl font-black text-primary">15,420 ر.س</p>
                        <div className="mt-4 pt-4 border-t border-surface-container text-xs text-outline font-medium">
                            نسبة التباين في الصندوق: 0.02%
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-tertiary">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
                            </div>
                            <span className="text-xs font-bold bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded">ذروة</span>
                        </div>
                        <h3 className="text-sm text-on-surface-variant font-semibold mb-1">أكثر الساعات مبيعاً</h3>
                        <p className="text-3xl font-black text-primary">08:00 م - 10:00 م</p>
                        <div className="mt-4 pt-4 border-t border-surface-container text-xs text-outline font-medium">
                            الوردية المسائية تساهم بـ 65% من الدخل
                        </div>
                    </div>

                    {/* Performance Chart (Large Card) */}
                    <div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant p-8 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
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
                            {/* Custom Chart UI */}
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '60%'}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '85%'}}></div>
                                </div>
                                <span className="text-xs font-bold text-outline">الأحد</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80" style={{height: '45%'}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80" style={{height: '70%'}}></div>
                                </div>
                                <span className="text-xs font-bold text-outline">الاثنين</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80" style={{height: '55%'}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80" style={{height: '90%'}}></div>
                                </div>
                                <span className="text-xs font-bold text-outline">الثلاثاء</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80" style={{height: '65%'}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80" style={{height: '80%'}}></div>
                                </div>
                                <span className="text-xs font-bold text-outline">الأربعاء</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="w-full flex gap-1 h-full items-end">
                                    <div className="flex-1 bg-primary rounded-t opacity-80" style={{height: '75%'}}></div>
                                    <div className="flex-1 bg-secondary rounded-t opacity-80" style={{height: '95%'}}></div>
                                </div>
                                <span className="text-xs font-bold text-outline">الخميس</span>
                            </div>
                        </div>
                    </div>

                    {/* Cash History (Side Card) */}
                    <div className="col-span-12 lg:col-span-4 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden">
                        {/* Decorative pattern */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.7,-76.4C58.2,-69.2,70,-58.5,77.3,-45.5C84.7,-32.5,87.7,-17.2,85.2,-2.5C82.7,12.2,74.7,26.2,65.6,39.6C56.5,53.1,46.3,65.9,33.1,72.1C19.9,78.3,3.7,77.9,-12.3,73.9C-28.3,69.9,-44.1,62.3,-55.8,50.7C-67.5,39.1,-75.1,23.5,-78.3,7.1C-81.5,-9.3,-80.4,-26.5,-72.5,-40.4C-64.7,-54.3,-50.1,-64.8,-35.3,-71.3C-20.5,-77.8,-5.5,-80.3,10.2,-78.5C25.9,-76.7,44.7,-76.4Z" fill="#FFFFFF" transform="translate(100 100)"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">history</span>
                            تاريخ رصيد الصندوق
                        </h2>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                                    <span className="text-sm font-medium">الوردية الصباحية (أمس)</span>
                                </div>
                                <span className="font-bold">4,200 ر.س</span>
                            </div>
                            <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                                    <span className="text-sm font-medium">الوردية المسائية (أمس)</span>
                                </div>
                                <span className="font-bold">11,220 ر.س</span>
                            </div>
                            <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary-fixed">error</span>
                                    <span className="text-sm font-medium">فارق مالي مكتشف</span>
                                </div>
                                <span className="font-bold text-tertiary-fixed">-15.00 ر.س</span>
                            </div>
                        </div>
                        <button className="w-full mt-8 bg-white text-primary py-3 rounded-lg font-bold hover:bg-surface-container transition-colors active:scale-95">
                            مراجعة جميع الفروقات
                        </button>
                    </div>

                    {/* Employee Analytics Table-Style List */}
                    <div className="col-span-12 bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-surface-container flex justify-between items-center">
                            <h2 className="text-xl font-bold text-primary">تحليل أداء الموظفين لكل وردية</h2>
                            <div className="flex gap-2">
                                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined" style={{fontSize: 18}}>filter_list</span>
                                </button>
                                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined" style={{fontSize: 18}}>search</span>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <thead className="bg-surface-container text-on-surface-variant text-sm font-bold">
                                    <tr>
                                        <th className="p-4">الموظف</th>
                                        <th className="p-4">نوع الوردية</th>
                                        <th className="p-4">إجمالي الساعات</th>
                                        <th className="p-4">عدد العمليات</th>
                                        <th className="p-4">معدل البيع/ساعة</th>
                                        <th className="p-4">الحالة</th>
                                        <th className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-container text-sm">
                                    <tr className="hover:bg-surface-container-low transition-colors">
                                        <td className="p-4 flex items-center gap-3">
                                            <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr9oiNClIykxhGPXHQeUsDdcX8UP3PdKsgWH82IzSU7qnRhAzs8qYu33eBpt-1n0f7biI_5g_3xPkvAKd1DUZxfkp_nkWCERwciYJmLubhmsaJaGN6yAFLwI2VL8A8y3toD6HbMmunrDIWr9J2u4G6PnBHWC6m4BJBM2ZMdOhBkjRz5IHHWFyoblbNB23tB2W89BZ9J0zR893rNZMmxm_NhL8E0BSI1crTeI0lsGbPhH0_fhjM1NwrxEgs-QmFUYZSzH3sEHeHYFY" alt="Employee" />
                                            <span className="font-semibold">محمد القحطاني</span>
                                        </td>
                                        <td className="p-4">صباحية</td>
                                        <td className="p-4">160 ساعة</td>
                                        <td className="p-4">450 عملية</td>
                                        <td className="p-4 font-bold">850 ر.س</td>
                                        <td className="p-4">
                                            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">نشط جداً</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low transition-colors">
                                        <td className="p-4 flex items-center gap-3">
                                            <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW8lFV5dSYlBe5_4tIMGH8MB2z5QM0BqWH09UZJ0zAAmSriulO4SqgNoOtXQrckqppRHLwjp9wsVVxfeywflwOBpCjcX5DOwgj5rLV_lmiAT9cofnAVTLX_M4BP8na4T6GqRTmLdW84wH1o1IoM7hcP_se-L32CUBKf3w5O-Kc5OflnBoKObErMRrvFqQ_idYl6B0A36vT-wHWnZnLIEKdnWDHVmfBDPOZRUMMtz5OOmMJ8w-6wbTS5YxKZasdK80Uo8OqpImyy-o" alt="Employee" />
                                            <span className="font-semibold">ليلى خالد</span>
                                        </td>
                                        <td className="p-4">مسائية</td>
                                        <td className="p-4">152 ساعة</td>
                                        <td className="p-4">610 عملية</td>
                                        <td className="p-4 font-bold">1,240 ر.س</td>
                                        <td className="p-4">
                                            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">متفوق</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low transition-colors">
                                        <td className="p-4 flex items-center gap-3">
                                            <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQm2QEJpvPBAsdC2knJpWxXAFUY1cAcdtCyiDAqBy2h8vHucqITRdmumz1POLgctkCvlyQic8mW5CjgWlYfSTTq-jXovt0b-zlAmcnwbqIsk8p0L80nerEJ21q-IJrBch6-rmfJ3x_s5xl5LaqDNb8tD_DtIoBLQiMT6u7eHY62BLIpVMZOA58Rmv1g765QxnXUk9AirkImKXGG-2Nscf4lTHNnXEqRHtP15a-QCWA0XoM99E6ktOwyzHfNOj08WCfLfsIUaxDbOw" alt="Employee" />
                                            <span className="font-semibold">ياسر عبدلله</span>
                                        </td>
                                        <td className="p-4">صباحية</td>
                                        <td className="p-4">158 ساعة</td>
                                        <td className="p-4">390 عملية</td>
                                        <td className="p-4 font-bold">720 ر.س</td>
                                        <td className="p-4">
                                            <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">مستقر</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdvancedShiftAnalytics;