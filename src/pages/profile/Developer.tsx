import React from 'react';

const DeveloperProfile = () => {
    return (
        <div className="max-w-7xl mx-auto rtl p-8 text-right" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-40 h-40 rounded-full border-4 border-primary/10 p-1 bg-white shadow-xl flex items-center justify-center overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcV1Hx_s3tQ6SvKJBXXAY2U3lc1yBTl3P4mC3oghenguDawt4wxwnxP0havk9IYwDhtonePA7bA44qYS8KiqOrRAheOHz0ZeiPuu9VG336P0o_oWB-rUB3JH6A6IOTt4P7cesxPMtI99QgqEO-d3rVhmKttd2kt7Wt_Ny2OoWz-pWjC7nVuIWpFAv3lTy4HScYr6xHa2ex64qlkyBT4QcZmRmMBNWj_PsK5oGqmTlAp6pK5bBvU60NT3I5mjdsU-jK2TGGAM_pAAA" alt="Developer" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-extrabold text-primary font-headline">سليمان آيت تباريت</h1>
                            <p className="text-teal-700 font-semibold text-lg mb-4">مطور ويب وبرمجيات أول</p>
                            <p className="text-slate-600 leading-relaxed">
                                خبير في بناء الأنظمة الإدارية وتطبيقات الويب المتقدمة باستخدام React و SQLite.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 bg-primary text-white rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-4">إحصائيات</h3>
                    <div className="text-4xl font-black">+10</div>
                    <p className="text-sm opacity-80">سنوات من الخبرة في التطوير</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperProfile;