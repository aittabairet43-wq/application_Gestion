import React from 'react';

const Inventory = () => {
    return (
        <div className="flex flex-col gap-8 rtl" dir="rtl">
            {/* Header Section */}
            <div className="flex flex-row-reverse justify-between items-end mb-2">
                <div className="text-right">
                    <h2 className="text-3xl font-extrabold text-primary mb-2 font-headline">إدارة المخزن</h2>
                    <p className="text-slate-500">إدارة المنتجات، مراقبة المخزون، وتحديث الأسعار</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex flex-row-reverse items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
                        <span className="material-symbols-outlined">file_download</span>
                        <span>تصدير Excel</span>
                    </button>
                    <button className="flex flex-row-reverse items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>إضافة منتج جديد</span>
                    </button>
                </div>
            </div>

            {/* Dashboard Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon="category" label="إجمالي الأصناف" value="1,284" color="bg-teal-50 text-teal-600" />
                <StatCard icon="warning" label="نواقص (أقل من 10)" value="42" color="bg-red-50 text-red-600" />
                <StatCard icon="inventory" label="إجمالي المخزون" value="15,420" color="bg-blue-50 text-blue-600" />
                <StatCard icon="payments" label="قيمة المخزن تقديراً" value="84,500" unit="ر.س" color="bg-orange-50 text-tertiary" />
            </div>

            {/* Products Table Area */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-50 flex flex-row-reverse items-center justify-between bg-slate-50/30">
                    <div className="flex flex-row-reverse gap-2">
                        <select className="text-right text-sm border-slate-200 rounded-lg focus:ring-primary pr-8">
                            <option>جميع الفئات</option>
                            <option>ألبان وأجبان</option>
                            <option>مخبوزات</option>
                        </select>
                        <select className="text-right text-sm border-slate-200 rounded-lg focus:ring-primary pr-8">
                            <option>حالة المخزون</option>
                            <option>متوفر</option>
                            <option>منخفض</option>
                        </select>
                    </div>
                    <div className="relative w-full max-w-xs">
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pr-10 pl-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary" placeholder="بحث في المنتجات..." type="text"/>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <th className="px-6 py-4 border-b border-slate-100">المنتج</th>
                                <th className="px-6 py-4 border-b border-slate-100">الباركود</th>
                                <th className="px-6 py-4 border-b border-slate-100">الفئة</th>
                                <th className="px-6 py-4 border-b border-slate-100 text-center">السعر</th>
                                <th className="px-6 py-4 border-b border-slate-100 text-center">المخزون</th>
                                <th className="px-6 py-4 border-b border-slate-100">الحالة</th>
                                <th className="px-6 py-4 border-b border-slate-100">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <ProductRow name="تفاح أحمر إيطالي" sub="سعر الكيلو" barcode="6281234567890" category="خضروات وفواكه" price="12.50" stock="145" status="متوفر" statusColor="bg-teal-50 text-teal-700" />
                            <ProductRow name="حليب المراعي 2 لتر" sub="كامل الدسم" barcode="6284412233441" category="ألبان وأجبان" price="11.00" stock="8" status="منخفض" statusColor="bg-red-50 text-red-700" />
                            <ProductRow name="مكرونة إيطاليانو" sub="سباغيتي" barcode="6289900112233" category="معلبات" price="5.75" stock="52" status="متوفر" statusColor="bg-teal-50 text-teal-700" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, unit, color }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-row-reverse items-center justify-between">
        <div className={`p-3 rounded-xl ${color}`}>
            <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <div className="text-right">
            <p className="text-slate-500 text-sm">{label}</p>
            <h3 className="text-2xl font-black text-slate-800 font-headline">{value} {unit && <span className="text-sm">{unit}</span>}</h3>
        </div>
    </div>
);

const ProductRow = ({ name, sub, barcode, category, price, stock, status, statusColor }: any) => (
    <tr className="hover:bg-slate-50 transition-colors group">
        <td className="px-6 py-4">
            <div className="flex flex-row-reverse items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-300">image</span>
                </div>
                <div>
                    <p className="font-bold text-slate-800">{name}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 text-sm font-mono text-slate-500">{barcode}</td>
        <td className="px-6 py-4 text-sm text-slate-600">{category}</td>
        <td className="px-6 py-4 text-center font-bold text-primary">{price} <span className="text-[10px]">ر.س</span></td>
        <td className="px-6 py-4 text-center font-bold">{stock}</td>
        <td className="px-6 py-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full border ${statusColor}`}>{status}</span>
        </td>
        <td className="px-6 py-4">
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button>
                <button className="p-1.5 text-slate-400 hover:text-error hover:bg-red-50 rounded-lg transition-colors"><span className="material-symbols-outlined">delete</span></button>
            </div>
        </td>
    </tr>
);

export default Inventory;