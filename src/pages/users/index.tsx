import React from 'react';

const Users = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Page Header */}
            <div className="flex justify-between items-end mb-2">
                <div className="text-right">
                    <h1 className="text-3xl font-black text-primary font-headline">إدارة صلاحيات الأدوار</h1>
                    <p className="text-slate-500 mt-1">تعديل وتخصيص الوصول للأدوار المختلفة</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-all">إلغاء</button>
                    <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-md hover:brightness-110 transition-all">حفظ التغييرات</button>
                </div>
            </div>

            {/* Permissions Summary Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard icon="point_of_sale" label="صلاحيات المبيعات" count="12/15" progress={80} color="bg-primary text-white" />
                <SummaryCard icon="inventory_2" label="صلاحيات المخزون" count="8/10" progress={80} color="bg-white border border-slate-200" iconColor="text-secondary-container" />
                <SummaryCard icon="assessment" label="صلاحيات التقارير" count="4/12" progress={33} color="bg-white border border-slate-200" iconColor="text-tertiary" />
            </div>

            {/* Permissions Management Matrix */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="text-lg font-bold text-on-surface font-headline">مصفوفة الأذونات التفصيلية</h3>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                            <input checked className="rounded border-slate-300 text-primary h-4 w-4" type="checkbox" readOnly />
                            <span>تحديد الكل</span>
                        </label>
                        <button className="text-xs text-primary font-bold hover:underline">توسيع الكل</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead>
                            <tr className="bg-white border-b border-slate-200">
                                <th className="px-8 py-5 text-sm font-bold text-slate-700 w-1/3">الوظيفة / الصلاحية</th>
                                <th className="px-6 py-5 text-sm font-bold text-slate-700 text-center">عرض</th>
                                <th className="px-6 py-5 text-sm font-bold text-slate-700 text-center">إنشاء</th>
                                <th className="px-6 py-5 text-sm font-bold text-slate-700 text-center">تعديل</th>
                                <th className="px-6 py-5 text-sm font-bold text-slate-700 text-center">حذف</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <PermissionGroup title="قسم المبيعات" />
                            <PermissionRow icon="receipt_long" title="الفواتير والمعاملات" sub="إدارة فواتير العملاء والرديات" checked={[true, true, false, false]} />
                            <PermissionRow icon="sell" title="العروض والخصومات" sub="تطبيق خصومات يدوية" checked={[true, false, false, false]} />
                            
                            <PermissionGroup title="قسم المخزون" />
                            <PermissionRow icon="inventory" title="مستويات المخزون" sub="تعديل كميات المنتجات" checked={[true, true, true, false]} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const SummaryCard = ({ icon, label, count, progress, color, iconColor }: any) => (
    <div className={`p-5 rounded-xl ${color}`}>
        <div className="flex justify-between items-center mb-4">
            <span className={`material-symbols-outlined ${iconColor || 'opacity-80'}`}>{icon}</span>
            <span className="text-2xl font-black">{count}</span>
        </div>
        <p className={`text-sm font-bold ${!color.includes('white') ? 'text-white' : 'text-slate-600'}`}>{label}</p>
        <div className={`w-full h-1.5 rounded-full mt-3 overflow-hidden ${!color.includes('white') ? 'bg-white/20' : 'bg-slate-100'}`}>
            <div className={`h-full ${!color.includes('white') ? 'bg-white' : iconColor?.replace('text-', 'bg-')}`} style={{ width: `${progress}%` }}></div>
        </div>
    </div>
);

const PermissionGroup = ({ title }: any) => (
    <tr className="bg-slate-50/50">
        <td className="px-8 py-3 text-xs font-black text-primary uppercase tracking-wider" colSpan={5}>{title}</td>
    </tr>
);

const PermissionRow = ({ icon, title, sub, checked }: any) => (
    <tr className="hover:bg-slate-50 transition-colors">
        <td className="px-8 py-5">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl">{icon}</span>
                <div>
                    <p className="text-sm font-bold text-on-surface">{title}</p>
                    <p className="text-xs text-slate-500">{sub}</p>
                </div>
            </div>
        </td>
        {checked.map((c: boolean, i: number) => (
            <td key={i} className="px-6 py-5 text-center">
                <input defaultChecked={c} className="rounded border-slate-300 text-primary h-5 w-5" type="checkbox" />
            </td>
        ))}
    </tr>
);

export default Users;