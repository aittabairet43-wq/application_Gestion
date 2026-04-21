"use client";

import React, { useState, useEffect } from 'react';
import { dbService } from '../../services/db'; // Fixed relative path
import toast from 'react-hot-toast';

const Messages = () => {
    const [conversations, setConversations] = useState<any[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<any>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', company: '', phone: '', address: '' });

    const loadConversations = () => {
        try {
            dbService.run("CREATE TABLE IF NOT EXISTS conversations (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, company TEXT, phone TEXT, address TEXT, last_message TEXT, last_date DATETIME DEFAULT CURRENT_TIMESTAMP)");
            dbService.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, conversation_id INTEGER, message TEXT, sender TEXT, date DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (conversation_id) REFERENCES conversations (id))");
            const res = dbService.exec("SELECT * FROM conversations ORDER BY last_date DESC");
            if (res.length > 0) {
                setConversations(res[0].values);
            } else {
                setConversations([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const loadMessages = (conversationId: number) => {
        try {
            const res = dbService.exec("SELECT * FROM messages WHERE conversation_id = ? ORDER BY date ASC", [conversationId]);
            if (res.length > 0) {
                setMessages(res[0].values);
            } else {
                setMessages([]);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const sendMessage = () => {
        if (!newMessage.trim() || !selectedConversation) return;
        try {
            dbService.run("INSERT INTO messages (conversation_id, message, sender) VALUES (?, ?, ?)", [selectedConversation[0], newMessage, 'user']);
            dbService.run("UPDATE conversations SET last_message = ?, last_date = CURRENT_TIMESTAMP WHERE id = ?", [newMessage, selectedConversation[0]]);
            setNewMessage('');
            loadMessages(selectedConversation[0]);
            loadConversations();
        } catch (e) {
            console.error(e);
        }
    };

    const addConversation = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dbService.run(
                "INSERT INTO conversations (name, company, phone, address) VALUES (?, ?, ?, ?)",
                [formData.name, formData.company, formData.phone, formData.address]
            );
            await dbService.save();
            toast.success('تم إضافة المحادثة بنجاح');
            setShowAddModal(false);
            setFormData({ name: '', company: '', phone: '', address: '' });
            loadConversations();
        } catch (err) {
            toast.error('خطأ في إضافة المحادثة');
        }
    };

    useEffect(() => {
        loadConversations();
    }, []);

    useEffect(() => {
        if (selectedConversation) {
            loadMessages(selectedConversation[0]);
        }
    }, [selectedConversation]);

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
                    {conversations.length === 0 ? (
                        <div className="p-8 text-center text-slate-400">
                            <p>لا توجد محادثات</p>
                            <button onClick={() => setShowAddModal(true)} className="mt-4 text-primary font-bold">إضافة محادثة جديدة</button>
                        </div>
                    ) : (
                        conversations.map((conv) => (
                            <div 
                                key={conv[0]} 
                                className={`p-4 border-b border-slate-50 cursor-pointer flex gap-3 transition-colors ${selectedConversation?.[0] === conv[0] ? 'bg-primary/5 border-r-4 border-primary' : 'hover:bg-slate-50'}`}
                                onClick={() => setSelectedConversation(conv)}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">{conv[1].charAt(0)}</div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-sm font-bold text-slate-800 truncate">{conv[1]}</h3>
                                        <span className="text-[10px] text-slate-400">{conv[5]}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate mt-1">{conv[4]}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 flex flex-col bg-white">
                {selectedConversation ? (
                    <>
                        <header className="h-16 px-6 border-b border-slate-200 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{selectedConversation[1].charAt(0)}</div>
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900">{selectedConversation[1]}</h2>
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
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs shrink-0 self-end">{selectedConversation[1].charAt(0)}</div>
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
                                    <textarea 
                                        className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 resize-none overflow-hidden" 
                                        placeholder="اكتب رسالتك هنا..." 
                                        rows={1}
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button onClick={sendMessage} className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </footer>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-400">
                        <div className="text-center">
                            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">forum</span>
                            <p>اختر محادثة للبدء</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Add Conversation Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
                        <h3 className="text-xl font-bold text-primary mb-6 font-headline">إضافة محادثة جديدة</h3>
                        <form onSubmit={addConversation} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">اسم المسؤول</label>
                                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="مثال: محمد أحمد" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">اسم الشركة</label>
                                <input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="شركة التوريد المحدودة" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">رقم الهاتف</label>
                                <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none text-left" dir="ltr" placeholder="+966" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-2">العنوان</label>
                                <input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="المدينة، الحي" />
                            </div>
                            <div className="flex gap-3 mt-8">
                                <button type="submit" className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110">حفظ المحادثة</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">إلغاء</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Messages;