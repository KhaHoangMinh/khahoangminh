import Image from 'next/image';
import React from 'react';

interface CompanyInfoSectionProps {
    established: string;
    fullName: string;
    subtitle?: string;
    intro1: string;
    intro2: string;
    motto: string;
    mottoDesc: string;
    thankYou: string;
}

export function CompanyInfoSection({ established, fullName, subtitle, intro1, intro2, motto, mottoDesc, thankYou }: CompanyInfoSectionProps) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mb-8">
                            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                {established}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                                {fullName}<br/>
                                <span className="text-orange-600">{subtitle?.toUpperCase()}</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-slate-700 dark:text-slate-300">
                            <p className="leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">{subtitle}</strong> {intro1}
                            </p>
                            <p className="leading-relaxed">{intro2}</p>
                            <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 border-l-4 border-orange-600 p-6 rounded-r-lg">
                                <p className="text-slate-800 dark:text-slate-200 font-bold text-lg italic">{motto}</p>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">{mottoDesc}</p>
                            </div>
                            <p className="leading-relaxed font-medium text-slate-900 dark:text-white">
                                {thankYou}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Image
                            src="http://khahoangminh.com.vn/upload/hinhanh/979d4c471bd530505eb18b1892246371-9428_579x400.jpg"
                            alt="Kha Hoàng Minh Main"
                            width={800}
                            height={600}
                            loading="lazy"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                                alt="Facility"
                                width={600}
                                height={400}
                                loading="lazy"
                                className="rounded-lg shadow-lg w-full h-40 object-cover"
                            />
                            <Image
                                src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                                alt="Warehouse"
                                width={600}
                                height={400}
                                loading="lazy"
                                className="rounded-lg shadow-lg w-full h-40 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}