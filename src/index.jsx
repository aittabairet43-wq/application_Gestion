import React, { useState, useEffect } from 'react';
import dbService from '../../services/db';
import { useAuthStore } from '../../store/useAuthStore';

const Dashboard = () => {
    const { user } = useAuthStore();
    const [stats, setStats] = useState({
        todaySales: 0,
        productCount: 0,
        lowStockCount: 0,
        recentSales: []
    });

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = () => {
        try {
            // 1. مبيعات اليوم
            const salesRes = dbService.db.exec("SELECT SUM(total) FROM sales WHERE date(created_at) = date('now')");
            const todaySales = salesRes[0]?.values[0][0] || 0;

            // 2. إجمالي المنتجات
            const prodCountRes = dbService.db.exec("SELECT count(*) FROM products");
            const productCount = prodCountRes[0]?.values[0][0] || 0;

            // 3. تنبيهات المخزون (أقل من 10 قطع)
            const lowStockRes = dbService.db.exec("SELECT count(*) FROM products WHERE quantity < 10");
            const lowStockCount = lowStockRes[0]?.values[0][0] || 0;

            // 4. آخر المبيعات
            const recentSalesRes = dbService.db.exec("SELECT total, payment_method, created_at FROM sales ORDER BY id DESC LIMIT 5");
            const recentSales = recentSalesRes[0]?.values.map(row => ({
                total: row[0],
                method: row[1],
                time: new Date(row[2]).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
            })) || [];

            setStats({ todaySales, productCount, lowStockCount, recentSales });
        } catch (err) {
            console.error("خطأ في تحميل الإحصائيات", err);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 font-headline tracking-tight">مرحباً، {user?.username}</h1>
                    <p className="text-slate-500 mt-1 font-medium">إليك ملخص أداء المتجر لهذا اليوم</p>
                </div>
                <div className="bg-white px-4 py-2 rounded shadow-sm border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">المحرك نشط (SQLite)</span>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="مبيعات اليوم" value={`${stats.todaySales.toFixed(2)} ر.س`} icon="payments" color="bg-primary/5 text-primary" />
                <StatCard title="إجمالي المنتجات" value={stats.productCount} icon="inventory_2" color="bg-secondary/10 text-secondary-container" />
                <StatCard title="تنبيهات المخزون" value={stats.lowStockCount} icon="warning" color="bg-error/10 text-error" isCritical={stats.lowStockCount > 0} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2 font-headline">
                            <span className="material-symbols-outlined text-primary">history</span>
                            آخر العمليات المنفذة
                        </h3>
                        <button className="text-xs font-bold text-primary hover:underline">عرض السجل الكامل</button>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {stats.recentSales.length > 0 ? stats.recentSales.map((sale, i) => (
                            <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-xl">shopping_bag</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">عملية بيع مكتملة</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">{sale.time} • {sale.method}</p>
                                    </div>
                                </div>
                                <span className="font-black text-primary">{sale.total.toFixed(2)} ر.س</span>
                            </div>
                        )) : (
                            <div className="p-12 text-center text-slate-400 italic text-sm">لا توجد مبيعات مسجلة لليوم حتى الآن</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color, isCritical }) => (
    <div className={`bg-white p-6 rounded shadow-sm border ${isCritical ? 'border-error/20' : 'border-slate-100'} flex items-center gap-5 transition-transform hover:scale-[1.01]`}>
        <div className={`w-14 h-14 rounded ${color} flex items-center justify-center shadow-inner`}>
            <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
            <p className={`text-2xl font-black ${isCritical ? 'text-error' : 'text-slate-900'} font-headline`}>{value}</p>
        </div>
    </div>
);

export default Dashboard;