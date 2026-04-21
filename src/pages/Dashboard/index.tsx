import React, { useState, useEffect } from 'react';
import { dbService } from '../../../services/db';
import { useAuthStore } from '../../../store/useAuthStore';

const Dashboard = () => {
    const { user } = useAuthStore();
    const [stats, setStats] = useState({
        todaySales: 0,
        netProfit: 0,
        lowStockCount: 0,
        recentSales: []
    });

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = () => {
        try {
            // مبيعات اليوم
            const salesRes = dbService.exec("SELECT SUM(total) FROM sales WHERE date(created_at) = date('now')");
            const todaySales = salesRes[0]?.values[0][0] || 0;

            // الربح الصافي (افتراضي 25%)
            const netProfit = todaySales * 0.25;

            // تنبيهات المخزون
            const lowStockRes = dbService.exec("SELECT count(*) FROM products WHERE quantity < 10");
            const lowStockCount = lowStockRes[0]?.values[0][0] || 0;

            // آخر المبيعات
            const recentSalesRes = dbService.exec("SELECT id, total, payment_method, created_at FROM sales ORDER BY id DESC LIMIT 4");
            const recentSales = recentSalesRes[0]?.values.map(row => ({
                id: row[0],
                total: row[1],
                method: row[2],
                time: new Date(row[3]).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
            })) || [];

            setStats({ todaySales, netProfit, lowStockCount, recentSales });
        } catch (err) {
            console.error("خطأ في تحميل الإحصائيات", err);
        }
    };

    return (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
            {/* Welcome Header */}
            <div>
                <h2 className="font-headline font-bold text-3xl text-on-surface mb-2">لوحة القيادة</h2>
                <p className="text-on-surface-variant text-base">نظرة عامة على أداء المتجر اليوم.</p>
            </div>

            {/* Quick Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Today's Sales */}
                <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all border border-slate-100">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">مبيعات اليوم</p>
                            <h3 className="font-headline font-bold text-3xl text-primary">{stats.todaySales.toLocaleString()} ر.س</h3>
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
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">صافي الربح التقديري</p>
                            <h3 className="font-headline font-bold text-3xl text-secondary-container">{stats.netProfit.toLocaleString()} ر.س</h3>
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
                <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden border-r-4 border-error hover:shadow-md transition-all">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">تنبيهات نقص المخزون</p>
                            <h3 className="font-headline font-bold text-3xl text-on-surface">{stats.lowStockCount} <span className="text-lg font-medium text-error">منتجات</span></h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">warning</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-error text-sm font-medium relative z-10">
                        <span>تحتاج إلى إعادة طلب قريباً</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
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
                                <span className="material-symbols-outlined text-on-surface-variant">qr_code_scanner</span>
                            </div>
                            <span className="font-medium text-lg">مسح منتج</span>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
                    </button>
                </div>

                {/* Recent Sales List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                        <h3 className="font-headline font-bold text-xl text-on-surface">المبيعات الأخيرة</h3>
                        <button className="text-sm font-medium text-primary hover:underline">عرض الكل</button>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50/50 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                            <div>رقم الطلب</div>
                            <div>الوقت</div>
                            <div>المبلغ</div>
                            <div>الحالة</div>
                        </div>
                        <div className="flex flex-col divide-y divide-slate-50">
                            {stats.recentSales.map((sale) => (
                                <div key={sale.id} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors">
                                    <div className="font-bold text-slate-700">#ORD-{sale.id}</div>
                                    <div className="text-on-surface-variant text-sm">{sale.time}</div>
                                    <div className="font-headline font-bold text-primary">{sale.total.toLocaleString()} ر.س</div>
                                    <div>
                                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary-container text-[10px] font-bold uppercase">
                                            مكتمل
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {stats.recentSales.length === 0 && (
                                <div className="p-12 text-center text-slate-400 italic">لا توجد عمليات بيع اليوم</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;