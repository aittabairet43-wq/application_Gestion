import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoicePreview = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-6 rtl text-right" dir="rtl">
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
                    <button className="bg-primary text-white px-5 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm font-semibold hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-lg">mail</span>
                        إرسال
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-xl rounded-sm p-[20mm] flex flex-col relative overflow-hidden border border-slate-100">
                <div className="absolute top-0 right-0 left-0 h-2 bg-primary"></div>
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">store</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-primary font-headline tracking-tight">ريتيل كور برو</h3>
                                <p className="text-sm text-slate-500 font-medium">RetailCore Pro</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600">حي النرجس، الرياض، المملكة العربية السعودية</p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-100 rounded-xl text-slate-300">
                   قالب الفاتورة جاهز للمعاينة
                </div>
            </div>
        </div>
    );
};

export default InvoicePreview;