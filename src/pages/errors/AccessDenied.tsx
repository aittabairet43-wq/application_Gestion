import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center rtl p-6 text-right" dir="rtl">
            <div className="text-center max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-lg mb-6">
                    <span className="material-symbols-outlined text-lg">lock</span>
                    <span className="font-bold text-sm">خطأ 403</span>
                </div>
                <h1 className="text-4xl font-black text-primary mb-6 font-headline">
                    عذراً، لا تملك الصلاحية للوصول
                </h1>
                <p className="text-slate-500 mb-8">
                    يتطلب الوصول إلى هذا القسم صلاحيات إدارية عليا. يرجى مراجعة المسؤول.
                </p>
                <button onClick={() => navigate(-1)} className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all">
                    العودة للخلف
                </button>
            </div>
        </div>
    );
};

export default AccessDenied;