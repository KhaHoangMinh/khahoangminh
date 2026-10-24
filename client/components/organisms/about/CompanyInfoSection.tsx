import Image from 'next/image';

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

export function CompanyInfoSection({
    established,
    fullName,
    subtitle,
    intro1,
    intro2,
    motto,
    mottoDesc,
    thankYou,
}: CompanyInfoSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="mb-6">
                            <span className="badge-khm mb-3">
                                {established}
                            </span>
                            <h2 className="heading-section">
                                {fullName}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300">
                                    {subtitle?.toUpperCase()}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-body">
                                <strong className="text-slate-900 dark:text-slate-50 font-semibold">{subtitle}</strong> {intro1}
                            </p>
                            <p className="text-body">{intro2}</p>
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50/60 dark:from-[#182234] dark:to-[#111827] border border-orange-200/60 dark:border-slate-700/80 border-l-4 border-l-orange-600 dark:border-l-orange-400 p-5 rounded-r-xl shadow-xs">
                                <p className="text-slate-900 dark:text-slate-50 font-serif font-bold text-base sm:text-lg italic">
                                    {motto}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-200 mt-1.5">{mottoDesc}</p>
                            </div>
                            <p className="text-body font-semibold !text-slate-900 dark:!text-slate-50">
                                {thankYou}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 aspect-[16/10]">
                            <Image
                                src="http://khahoangminh.com.vn/upload/hinhanh/979d4c471bd530505eb18b1892246371-9428_579x400.jpg"
                                alt="Kha Hoàng Minh Main"
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800 h-32 sm:h-36">
                                <Image
                                    src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%201.jpg"
                                    alt="Facility"
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 21vw"
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800 h-32 sm:h-36">
                                <Image
                                    src="http://khahoangminh.com.vn/upload/news/co%CC%82ng%20ty%20inox%20kha%20hoa%CC%80ng%20minh%203.jpg"
                                    alt="Warehouse"
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 21vw"
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
