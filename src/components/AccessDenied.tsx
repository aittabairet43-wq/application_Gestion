"use client";

import React from 'react';

const AccessDenied = () => {
    return (
        <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center rtl p-6 text-right" dir="rtl">
            <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-start text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-error-container text-on-error-container rounded-lg mb-6">
                        <span className="material-symbols-outlined text-lg">lock</span>
                        <span className="font-headline font-bold text-sm tracking-wide">خطأ 403</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-container mb-6 leading-tight">
                        عذراً، لا تملك الصلاحية للوصول
                    </h1>
                    <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed mb-10">
                        يبدو أنك تحاول الوصول إلى قسم محمي في Kinetiq Retail. يرجى التأكد من حسابك أو طلب الأذونات اللازمة من مسؤول النظام.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                        <button className="flex items-center justify-center gap-3 bg-primary-container text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary-container/20">
                            <span className="material-symbols-outlined">admin_panel_settings</span>
                            تواصل مع المسؤول
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all active:scale-95">
                            <span className="material-symbols-outlined">arrow_forward</span>
                            العودة للخلف
                        </button>
                    </div>
                    <div className="mt-12 flex items-center gap-8 border-t border-outline pt-8 w-full max-w-sm">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-outline uppercase tracking-widest mb-1">مرجع الخطأ</span>
                            <span className="font-mono text-sm text-on-surface">KR-AUTH-9921</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-outline uppercase tracking-widest mb-1">الوقت المحلي</span>
                            <span className="font-mono text-sm text-on-surface">14:22 AST</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative aspect-square group">
                    <div className="absolute inset-0 bg-secondary-container/20 rounded-full blur-3xl scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/50 p-4">
                        <img className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8WykDGvJ76VG_KiwZmyaZD6hDx09MVJzSF9S7o5OxSYOIrwYqNpmiubVHrG23ZNh1BC8OJEFQlyHNxnQXoxDYkn8Nfo0lcsIaGZT-vIPeq4Wi0P7jG9QVxGvBdO7H6nhYGQy2G4_gP0OBrdqheWO7DhxTMfxUz1AJbsEXtdTjy306RytEGelqI5tf6ywM3JMoWGM26KlbYuA3PidIyhP_82RDhRhFmB4MK-A232zx3a5eFs2JN14bqlKAMZgt8V11SvjqPhvSyCs" alt="Security interface" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-inner">
                                <span className="material-symbols-outlined text-5xl text-white drop-shadow-lg" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface-container-low/95 backdrop-blur-md rounded-xl border border-white/40 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-white">shield_person</span>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface">Kinetiq Guard</h4>
                                    <p className="text-xs text-on-surface-variant">نظام التحقق من هوية المستخدم النشط</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-tertiary-fixed-dim/30 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
                </div>
            </div>
            <footer className="fixed bottom-8 text-outline text-sm font-label flex items-center gap-2">
                <span>© 2024 Kinetiq Retail</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <a className="hover:text-primary transition-colors">سياسة الوصول</a>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <a className="hover:text-primary transition-colors">الدعم الفني</a>
            </footer>
        </div>
    );
};

export default AccessDenied;