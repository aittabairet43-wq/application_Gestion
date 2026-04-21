"use client";

import React, { useState } from 'react';

const Messages = () => {
    return (
        <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden rtl" dir="rtl">
            {/* Conversations List */}
            <div className="w-80 border-l border-slate-200 flex flex-col bg-white">
                <div className="p-4 border-b border-slate-100">
                    <div className="relative">
                        <input className="w-full pl-4 pr-10 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs focus:ring-2 focus:ring-primary outline-none" placeholder="بحث في المحادثات..." type="text"/>
                        <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 text-sm">search</span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Active Conversation */}
                    <div className="p-4 bg-primary/5 border-r-4 border-primary cursor-pointer flex gap-3">
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">ش</div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="text-sm font-bold text-primary truncate">شركة التوريد المتحدة</h3>
                                <span className="text-[10px] text-slate-400">١٠:٤٥ ص</span>
                            </div>
                            <p className="text-xs text-slate-600 truncate mt-1">لقد قمنا بتحديث أسعار التوريد...</p>
                        </div>
                    </div>
                    {/* Other Conversations */}
                    <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex gap-3 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold shrink-0">أ</div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="text-sm font-semibold text-slate-800 truncate">أحمد حسن (مشرف)</h3>
                                <span className="text-[10px] text-slate-400">أمس</span>
                            </div>
                            <p className="text-xs text-slate-500 truncate mt-1">تم استلام الشحنة رقم ٤٥٠٢.</p>
                        </div>
                    </div>
                    <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex gap-3 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold shrink-0">ل</div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="text-sm font-semibold text-slate-800 truncate">لوجستيات النقل</h3>
                                <span className="text-[10px] text-slate-400">الإثنين</span>
                            </div>
                            <p className="text-xs text-slate-500 truncate mt-1">هل يمكنكم تأكيد موعد التوصيل؟</p>
                        </div>
                        <div className="flex items-center">
                            <span className="w-5 h-5 bg-error text-white text-[10px] rounded-full flex items-center justify-center font-bold">٣</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 flex flex-col bg-white">
                <header className="h-16 px-6 border-b border-slate-200 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">ش</div>
                        <div>
                            <h2 className="text-sm font-bold text-slate-900">شركة التوريد المتحدة</h2>
                            <span className="text-[11px] text-green-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                متصل الآن
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">call</span></button>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">videocam</span></button>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">more_vert</span></button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 custom-scrollbar">
                    <div className="flex justify-center">
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] text-slate-500 font-bold uppercase">اليوم</span>
                    </div>
                    {/* Received Message */}
                    <div className="flex gap-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs shrink-0 self-end">ش</div>
                        <div className="flex flex-col gap-1">
                            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-br-none shadow-sm">
                                <p className="text-sm text-slate-800 leading-relaxed">تحية طيبة، لقد أرسلنا لكم قائمة الأسعار المحدثة لمنتجات الألبان والأجبان لشهر مايو. يرجى المراجعة والتأكيد.</p>
                            </div>
                            <span className="text-[10px] text-slate-400 mr-1">١٠:٤٢ ص</span>
                        </div>
                    </div>
                    {/* Sent Message */}
                    <div className="flex flex-row-reverse gap-3 max-w-[80%] mr-auto">
                        <div className="flex flex-col items-end gap-1">
                            <div className="bg-primary text-white p-4 rounded-2xl rounded-bl-none shadow-sm">
                                <p className="text-sm leading-relaxed">أهلاً بكم. استلمنا الملف وسنقوم بمراجعته مع قسم المشتريات والرد عليكم قريباً.</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] text-slate-400">١٠:٤٥ ص</span>
                                <span className="material-symbols-outlined text-xs text-primary" style={{fontVariationSettings: "'FILL' 1"}}>done_all</span>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="p-4 border-t border-slate-200 bg-white">
                    <div className="flex items-end gap-3 max-w-4xl mx-auto">
                        <div className="flex gap-1 pb-1">
                            <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">
                                <span className="material-symbols-outlined">attach_file</span>
                            </button>
                        </div>
                        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 flex items-center">
                            <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 resize-none overflow-hidden" placeholder="اكتب رسالتك هنا..." rows={1}></textarea>
                        </div>
                        <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </footer>
            </div>

            {/* Profile Info Side (Contextual) */}
            <div className="w-72 border-r border-slate-200 bg-white hidden xl:flex flex-col overflow-y-auto custom-scrollbar">
                <div className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-4xl mx-auto mb-4 border-4 border-white shadow-sm">ش</div>
                    <h3 className="font-bold text-slate-900">شركة التوريد المتحدة</h3>
                    <p className="text-[11px] text-slate-500 mb-4">مورد معتمد منذ ٢٠٢١</p>
                    <div className="flex justify-center gap-2">
                        <span className="px-2 py-1 bg-teal-50 text-secondary text-[10px] font-bold rounded">نشط</span>
                        <span className="px-2 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded">VIP</span>
                    </div>
                </div>
                <div className="p-6 border-t border-slate-50">
                    <h4 className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">تفاصيل الاتصال</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 text-sm">person</span>
                            <div className="text-xs">
                                <div className="text-slate-400 font-medium">الشخص المسؤول</div>
                                <div className="text-slate-700 font-bold">محمد سامي</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 text-sm">call</span>
                            <div className="text-xs">
                                <div className="text-slate-400 font-medium">رقم التواصل</div>
                                <div className="text-slate-700 font-bold text-left" dir="ltr">+966 50 123 4567</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-slate-50 mt-auto">
                    <button className="w-full py-2.5 border border-error text-error text-xs font-bold rounded-lg hover:bg-error/5 transition-colors">
                        حظر المورد
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Messages;