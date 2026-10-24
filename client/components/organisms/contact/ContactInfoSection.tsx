"use client";

import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { useLanguage } from "@/services";
import { createPageUrl } from '@/lib';
import { ContactInfoCard, ActionRedirectCard } from '@/components/molecules';

export function ContactInfoSection() {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: MapPin,
            title: t('contactPage.infoAddress'),
            content: t('footer.addressText'),
            color: "text-white",
            bg: "bg-gradient-to-br from-orange-500 to-amber-500"
        },
        {
            icon: Mail,
            title: t('contactPage.infoEmail'),
            content: <a href="mailto:info@khahoangminh.com.vn" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">info@khahoangminh.com.vn</a>,
            color: "text-white",
            bg: "bg-gradient-to-br from-orange-500 to-amber-500"
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
            bg: "bg-gradient-to-br from-orange-500 to-amber-500"
        }
    ];

    return (
        <>
            <div className="space-y-3.5">
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

            <div className="card-khm rounded-2xl p-6 flex-grow flex flex-col justify-center">
                <h3 className="heading-card mb-4 flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    {t('contactPage.supportTitle')}
                </h3>

                <div className="grid grid-cols-1 gap-3.5">
                    <ActionRedirectCard 
                        label={t('contactPage.socialLabel') || "Social Media"}
                        title="Facebook"
                        subtitle={t('contactPage.socialConnect') || "Kết nối với chúng tôi"}
                        icon={FaFacebook}
                        link="https://www.facebook.com/inoxkhahoangminh"
                        isExternal={true}
                        colorTheme="amber"
                    />
                    <ActionRedirectCard 
                        label={t('contactPage.directSupportLabel') || "Support"}
                        title={t('contactPage.directSupportTitle') || "Liên Hệ"}
                        subtitle={t('contactPage.directSupportSubtitle') || "Gửi yêu cầu trực tiếp"}
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
