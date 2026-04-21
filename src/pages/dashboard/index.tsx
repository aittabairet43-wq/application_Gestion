import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full rtl" dir="rtl">
            {/* Welcome Header */}
            <div>
                <h2 className="font-headline font-bold text-3xl text-on-surface mb-2">لوحة القيادة</h2>
                <p className="text-slate-500 text-base">نظرة عامة على أداء المتجر اليوم.</p>
            </div>

            {/* Bento Grid: Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Today's Sales */}
                <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all border border-slate-100">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-1">مبيعات اليوم</p>
                            <h3 className="font-headline font-bold text-3xl text-primary">12,450 ر.س</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">payments</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-secondary-container text-sm font-medium relative z-10">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span>+15% عن الأمس</span>
                    </div>
                </div>

                {/* Net Profit */}
                <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all border border-slate-100">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-1">صافي الربح</p>
                            <h3 className="font-headline font-bold text-3xl text-primary">3,200 ر.س</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-secondary-container text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-secondary-container text-sm font-medium relative z-10">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span>+8% هذا الأسبوع</span>
                    </div>
                </div>

                {/* Low Stock Alerts */}
                <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden border-r-4 border-tertiary border-slate-100">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-1">تنبيهات نقص المخزون</p>
                            <h3 className="font-headline font-bold text-3xl text-primary">12 <span className="text-lg font-medium text-tertiary">منتج</span></h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-tertiary flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">warning</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-tertiary text-sm font-medium relative z-10">
                        <span>يحتاج إلى إعادة طلب قريباً</span>
                    </div>
                </div>
            </div>

            {/* Asymmetric Grid: Quick Actions & Recent Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-2">إجراءات سريعة</h3>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg active:scale-[0.98] transition-transform">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                <span className="material-symbols-outlined">point_of_sale</span>
                            </div>
                            <span className="font-headline font-bold text-lg">إضافة بيع</span>
                        </div>
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white text-on-surface shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors active:scale-[0.98]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-500">qr_code_scanner</span>
                            </div>
                            <span className="font-medium text-lg">مسح منتج</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">arrow_back</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white text-on-surface shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors active:scale-[0.98]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-500">add_box</span>
                            </div>
                            <span className="font-medium text-lg">إضافة منتج</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">arrow_back</span>
                    </button>
                </div>

                {/* Recent Sales List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h3 className="font-headline font-bold text-xl text-on-surface">المبيعات الأخيرة</h3>
                        <button className="text-sm font-medium text-primary hover:underline">عرض الكل</button>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50 text-sm font-bold text-slate-500">
                            <div>رقم الطلب</div>
                            <div>الوقت</div>
                            <div>المبلغ</div>
                            <div>الحالة</div>
                        </div>
                        <div className="flex flex-col gap-1 p-2">
                            <div className="grid grid-cols-4 gap-4 p-3 rounded-lg items-center hover:bg-slate-50 transition-colors">
                                <div className="font-medium text-on-surface">#ORD-092</div>
                                <div className="text-slate-500 text-sm">10:45 ص</div>
                                <div className="font-headline font-bold text-on-surface">150 ر.س</div>
                                <div><span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-container text-xs font-bold">مكتمل</span></div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-3 rounded-lg items-center hover:bg-slate-50 transition-colors">
                                <div className="font-medium text-on-surface">#ORD-091</div>
                                <div className="text-slate-500 text-sm">09:30 ص</div>
                                <div className="font-headline font-bold text-on-surface">85 ر.س</div>
                                <div><span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-container text-xs font-bold">مكتمل</span></div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-3 rounded-lg items-center hover:bg-slate-50 transition-colors">
                                <div className="font-medium text-on-surface">#ORD-090</div>
                                <div className="text-slate-500 text-sm">08:15 ص</div>
                                <div className="font-headline font-bold text-on-surface">420 ر.س</div>
                                <div><span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-container text-xs font-bold">مكتمل</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;