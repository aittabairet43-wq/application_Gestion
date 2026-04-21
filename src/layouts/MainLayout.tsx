import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const MainLayout = () => {
    const { user, logout } = useAuthStore();

    return (
        <div className="flex min-h-screen bg-[#f8f9fb] text-on-surface font-body rtl" dir="rtl">
            <aside className="fixed right-0 top-0 h-screen w-64 bg-white border-l border-slate-200 flex flex-col z-40">
                <div className="p-6">
                    <div className="text-xl font-black text-primary font-headline">Kinetiq Retail</div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">نظام إدارة البقالة</p>
                </div>

                <nav className="flex-1 mt-4 px-2 space-y-1 overflow-y-auto custom-scrollbar">
                    <MenuLink to="/dashboard" icon="dashboard" label="لوحة القيادة" />
                    <MenuLink to="/engine" icon="database" label="محرك البيانات" />
                    <MenuLink to="/pos" icon="shopping_cart" label="المبيعات" />
                    <MenuLink to="/inventory" icon="inventory_2" label="المخزون" />
                    <MenuLink to="/branches" icon="hub" label="إدارة الفروع" />
                    
                    <div className="pt-4 pb-2 px-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">التقارير</p>
                    </div>
                    <MenuLink to="/reports/cash-logs" icon="payments" label="حركة الصندوق" />
                    <MenuLink to="/reports/shift-analytics" icon="analytics" label="إحصائيات الورديات" />
                    <MenuLink to="/invoices/preview" icon="receipt_long" label="الفواتير" />
                    
                    {user?.role === 'admin' && (
                        <>
                            <div className="pt-4 pb-2 px-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">النظام</p>
                            </div>
                            <MenuLink to="/users" icon="manage_accounts" label="الصلاحيات" />
                        </>
                    )}
                    
                    <div className="pt-4 pb-2 px-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">الإعدادات</p>
                    </div>
                    <MenuLink to="/profile" icon="person" label="ملف المطور" />
                </nav>

                <div className="p-4 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                            {user?.username?.[0].toUpperCase()}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold truncate">{user?.username}</p>
                            <p className="text-[10px] text-slate-500 uppercase">{user?.role === 'admin' ? 'مدير' : 'بائع'}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2 text-error hover:bg-red-50 rounded-lg text-sm font-bold transition-all">
                        <span className="material-symbols-outlined">logout</span>
                        <span>خروج</span>
                    </button>
                </div>
            </aside>

            <main className="mr-64 flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};

interface MenuLinkProps {
    to: string;
    icon: string;
    label: string;
}

const MenuLink = ({ to, icon, label }: MenuLinkProps) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-slate-600 hover:bg-slate-50'}`
        }
    >
        <span className="material-symbols-outlined">{icon}</span>
        <span>{label}</span>
    </NavLink>
);

export default MainLayout;