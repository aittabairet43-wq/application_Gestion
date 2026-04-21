import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db';
import { Sale } from '../../types';

const Reports = () => {
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const res = dbService.exec("SELECT * FROM sales ORDER BY created_at DESC");
        if (res.length > 0) {
            setSales(res[0].values.map((row: any) => ({
                id: row[0], total: row[1], payment_method: row[2], created_at: row[3]
            })));
        }
    }, []);

    const exportData = () => {
        const dataStr = JSON.stringify(sales);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = 'sales_report.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black text-primary font-headline">تقارير المبيعات</h1>
                <button onClick={exportData} className="flex items-center gap-2 bg-secondary text-primary-container px-4 py-2 rounded-lg font-bold text-sm">
                    <span className="material-symbols-outlined text-sm">download</span>
                    تصدير JSON
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-right text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold">
                        <tr>
                            <th className="px-6 py-4">رقم الفاتورة</th>
                            <th className="px-6 py-4">التاريخ</th>
                            <th className="px-6 py-4">طريقة الدفع</th>
                            <th className="px-6 py-4">الإجمالي</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {sales.map(sale => (
                            <tr key={sale.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-mono">#INV-{sale.id}</td>
                                <td className="px-6 py-4">{new Date(sale.created_at).toLocaleString('ar-SA')}</td>
                                <td className="px-6 py-4">{sale.payment_method}</td>
                                <td className="px-6 py-4 font-black text-primary">{sale.total.toFixed(2)} ر.س</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;