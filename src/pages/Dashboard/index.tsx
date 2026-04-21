import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db';

interface RecentSale {
    id: number;
    total: number;
    method: string;
    time: string;
}

const Dashboard = () => {
    const [stats, setStats] = useState({
        todaySales: 0,
        netProfit: 0,
        lowStockCount: 0,
        recentSales: [] as RecentSale[]
    });

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = () => {
        try {
            const salesRes = dbService.exec("SELECT SUM(total) FROM sales WHERE date(created_at) = date('now')");
            const todaySales = (salesRes[0]?.values[0][0] as number) || 0;
            const netProfit = todaySales * 0.25;
            const lowStockRes = dbService.exec("SELECT count(*) FROM products WHERE quantity < 10");
            const lowStockCount = (lowStockRes[0]?.values[0][0] as number) || 0;
            const recentSalesRes = dbService.exec("SELECT id, total, payment_method, created_at FROM sales ORDER BY id DESC LIMIT 4");
            
            const recentSales: RecentSale[] = recentSalesRes[0]?.values.map((row: any) => ({
                id: row[0], 
                total: row[1], 
                method: row[2], 
                time: new Date(row[3]).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
            })) || [];
            
            setStats({ todaySales, netProfit, lowStockCount, recentSales });
        } catch (err) {
            console.error("Error loading stats", err);
        }
    };

    return (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div>
                <h2 className="font-headline font-bold text-3xl text-on-surface mb-2">لوحة القيادة</h2>
                <p className="text-on-surface-variant text-base">نظرة عامة على أداء المتجر اليوم.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group">
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
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">الربح التقديري</p>
                            <h3 className="font-headline font-bold text-3xl text-secondary-container">{stats.netProfit.toLocaleString()} ر.س</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-secondary-container text-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-r-4 border-error relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">نقص المخزون</p>
                            <h3 className="font-headline font-bold text-3xl text-on-surface">{stats.lowStockCount} <span className="text-lg font-medium text-error">منتج</span></h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl">warning</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-2">إجراءات سريعة</h3>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg active:scale-[0.98] transition-transform">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md"><span className="material-symbols-outlined">point_of_sale</span></div>
                            <span className="font-headline font-bold text-lg">إضافة بيع</span>
                        </div>
                    </button>
                </div>
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                        <h3 className="font-headline font-bold text-xl text-on-surface">المبيعات الأخيرة</h3>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {stats.recentSales.map((sale) => (
                            <div key={sale.id} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-slate-50/50">
                                <div className="font-bold text-slate-700">#ORD-{sale.id}</div>
                                <div className="text-on-surface-variant text-sm">{sale.time}</div>
                                <div className="font-headline font-bold text-primary">{sale.total.toLocaleString()} ر.س</div>
                                <div className="text-left"><span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary-container text-[10px] font-bold">مكتمل</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;