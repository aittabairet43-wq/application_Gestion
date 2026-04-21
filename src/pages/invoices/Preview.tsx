import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoicePreview = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-6 rtl" dir="rtl">
            {/* Action Toolbar */}
            <div className="w-full max-w-[210mm] flex justify-between items-center mb-6 no-print">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        عودة للقائمة
                    </button>
                    <span className="text-slate-400 mx-2">|</span>
                    <h2 className="text-lg font-bold text-slate-800 font-headline">معاينة الفاتورة #INV-2024-089</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all" onClick={() => window.print()}>
                        <span className="material-symbols-outlined text-lg">print</span>
                        طباعة
                    </button>
                    <button className="bg-primary px-5 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm font-semibold text-white hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-lg">mail</span>
                        إرسال بالبريد
                    </button>
                </div>
            </div>

            {/* A4 Invoice Preview */}
            <div className="print-area w-full max-w-[210mm] min-h-[297mm] bg-white shadow-xl rounded-sm p-[20mm] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-2 bg-primary"></div>
                
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">store</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-primary font-headline tracking-tight">ريتيل كور برو</h3>
                                <p className="text-sm text-slate-500 font-medium">RetailCore Pro Management</p>
                            </div>
                        </div>
                        <div className="text-sm text-slate-600 leading-relaxed">
                            حي النرجس، طريق عثمان بن عفان<br/>
                            الرياض، المملكة العربية السعودية<br/>
                            الرقم الضريبي: ٣٠٠٤٥٦٧٨٩٠٠٠٠٠٣
                        </div>
                    </div>
                    <div className="text-left flex flex-col items-end">
                        <h1 className="text-4xl font-black text-slate-900 font-headline uppercase mb-4">فاتورة</h1>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            <span className="text-slate-500 font-medium">رقم الفاتورة:</span>
                            <span className="font-bold text-slate-900">INV-2024-089</span>
                            <span className="text-slate-500 font-medium">تاريخ الإصدار:</span>
                            <span className="font-bold text-slate-900">٢٤ مايو ٢٠٢٤</span>
                        </div>
                    </div>
                </div>

                {/* Billing Details */}
                <div className="grid grid-cols-2 gap-16 mb-12 py-8 border-y border-slate-100">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">فاتورة إلى</h4>
                        <div className="space-y-1">
                            <p className="text-lg font-bold text-slate-900">مؤسسة الحلول المتقدمة</p>
                            <p className="text-sm text-slate-600">عناية: م. أحمد القحطاني</p>
                            <p className="text-sm text-slate-600">الرقم الضريبي: ٣١٠٢٩٨٣٧٤٦٠٠٠٠٣</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">طريقة الدفع</h4>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <span className="material-symbols-outlined text-primary">account_balance</span>
                            <div>
                                <p className="text-sm font-bold text-slate-900">تحويل بنكي</p>
                                <p className="text-xs text-slate-500">البنك الأهلي السعودي</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="flex-1">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-900">
                                <th className="py-4 font-bold text-sm text-slate-900">الوصف</th>
                                <th className="py-4 font-bold text-sm text-slate-900 text-center">الكمية</th>
                                <th className="py-4 font-bold text-sm text-slate-900 text-left">سعر الوحدة</th>
                                <th className="py-4 font-bold text-sm text-slate-900 text-left">الإجمالي</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="py-5">
                                    <p className="font-bold text-slate-900">نظام إدارة المخازن الاحترافي</p>
                                    <p className="text-xs text-slate-500 mt-1">ترخيص سنوي لـ ٥ مستخدمين</p>
                                </td>
                                <td className="py-5 text-center text-slate-700">١</td>
                                <td className="py-5 text-left text-slate-700">٢,٥٠٠.٠٠ ر.س</td>
                                <td className="py-5 text-left font-bold text-slate-900">٢,٨٧٥.٠٠ ر.س</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div className="mt-12 flex justify-between items-end border-t-2 border-slate-100 pt-8">
                    <div className="max-w-sm">
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                            هذه الفاتورة متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA).
                        </p>
                    </div>
                    <div className="w-72 space-y-3">
                        <div className="flex justify-between text-sm text-slate-600">
                            <span>المجموع الفرعي</span>
                            <span>٥,٠٥٠.٠٠ ر.س</span>
                        </div>
                        <div className="flex justify-between text-xl font-black text-primary border-t border-slate-200 pt-3">
                            <span>الإجمالي المستحق</span>
                            <span>٥,٨٠٧.٥٠ ر.س</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicePreview;