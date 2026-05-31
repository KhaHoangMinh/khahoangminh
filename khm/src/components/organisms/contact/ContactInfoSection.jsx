import React from 'react';
import { MapPin, Mail, Clock, Phone, Facebook } from 'lucide-react';
import { useLanguage } from "@/services/LanguageProvider.jsx";
import { createPageUrl } from '@/utils';
import { ContactInfoCard, ActionRedirectCard } from '@/components/molecules';

export function ContactInfoSection() {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: MapPin,
            title: t('contactPage.infoAddress'),
            content: t('footer.addressText'),
            color: "text-white",
            bg: "bg-gradient-to-br from-orange-400 to-orange-600"
        },
        {
            icon: Mail,
            title: t('contactPage.infoEmail'),
            content: <a href="mailto:info@khahoangminh.com.vn" className="hover:text-orange-600 transition-colors">info@khahoangminh.com.vn</a>,
            color: "text-white",
            bg: "bg-gradient-to-br from-orange-400 to-orange-600"
        },
        {
            icon: Clock,
            title: t('contactPage.infoHours'),
            content: (
                <>
                    {t('contactPage.workingHoursText1')}
                    <br />
                    {t('contactPage.workingHoursText2')}
                </>
            ),
            color: "text-white",
            bg: "bg-gradient-to-br from-orange-400 to-orange-600"
        }
    ];

    return (
        <>
            <div className="space-y-4">
                {contactInfo.map((info, index) => (
                    <ContactInfoCard 
                        key={index}
                        icon={info.icon}
                        title={info.title}
                        content={info.content}
                        bgClass={info.bg}
                        iconColorClass={info.color}
                    />
                ))}
            </div>

            <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-white/10 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-orange-600" />
                    {t('contactPage.supportTitle')}
                </h3>

                <div className="grid grid-cols-1 gap-5">
                    <ActionRedirectCard 
                        label="Social Media"
                        title="Facebook"
                        subtitle="Kết nối với chúng tôi"
                        icon={Facebook}
                        link="https://www.facebook.com/inoxkhahoangminh"
                        isExternal={true}
                        colorTheme="blue"
                    />
                    <ActionRedirectCard 
                        label="Support"
                        title="Liên Hệ"
                        subtitle="Gửi yêu cầu trực tiếp"
                        icon={Mail}
                        link={createPageUrl('contact')}
                        isExternal={false}
                        colorTheme="orange"
                    />
                </div>
            </div>
        </>
    );
}