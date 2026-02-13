import React, {useEffect, useRef, useState} from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook , Loader2, CheckCircle2, AlertCircle} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {useLanguage} from "@/services/LanguageProvider.jsx";
import {sendEmail} from "@/hooks/emailJS.js";
import {validateContactForm} from "@/utils/validation.js";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const { t } = useLanguage();
    const mapContainerRef = useRef(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setStatus({ type: '', message: '' });

        const validation = validateContactForm(formData, t);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSending(true);
        try {
            await sendEmail(formData);
            setStatus({
                type: 'success',
                message: t('contactPage.successMessage') || 'Message sent successfully!'
            });
            // Clear form on success
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: "Failed to send message. Please try again later."
            });
        } finally {
            setIsSending(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: t('contactPage.infoAddress'),
            content: t('footer.addressText'),
            color: "text-slate-50",
            bg: "bg-orange-400"
        },
        {
            icon: Mail,
            title: t('contactPage.infoEmail'),
            content: <a href='#' className="hover:text-orange-600 transition-colors">info@khahoangminh.com.vn</a>,
            color: "text-slate-50",
            bg: "bg-orange-400"
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
            color: "text-slate-50",
            bg: "bg-orange-400"
        }
    ];

    useEffect(() => {
        // Ensure Leaflet is loaded and the container exists
        if (!window.L || !mapContainerRef.current) return;

        // Define Coordinates
        const lat = 10.813049;
        const lng = 106.597400;

        // Standard Street Map
        const osmLayer = window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        // Satellite Map
        const satelliteLayer = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        const map = window.L.map(mapContainerRef.current, {
            center: [lat, lng],
            zoom: 15,
            layers: [osmLayer] // Default layer
        });

        const baseMaps = {
            "Street": osmLayer,
            "Satellite": satelliteLayer
        };
        window.L.control.layers(baseMaps).addTo(map);

        window.L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`<b style="color:#333">${t('common.companyShortName')}</b><br><span style="color:#666">93/16 Nguyen Thi Tu</span>`)
            .openPopup();

        // Cleanup
        return () => {
            map.remove()
        };
    }, [t]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-slate-950 text-white py-20">
                <div className="absolute inset-0 bg-[url('http://khahoangminh.com.vn/upload/hinhanh/ddd_1366x540.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('contactPage.heroTitle')} <span className="text-orange-500">{t('contactPage.heroSubtitle')}</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            {t('contactPage.heroDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="flex-grow container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-12 gap-6 h-full">

                    {/* Column 1: Contact Form (Left) */}
                    <div className="lg:col-span-4">
                        <Card className="h-full border-0 shadow-lg bg-white dark:bg-slate-900">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                                    {t('contactPage.formTitle')}
                                </h2>
                                <p className="text-sm text-slate-500 mb-6">{t('contactPage.formDesc')}</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                                            {t('contactPage.labels.name')} <span className="text-red-500 ml-0.5">*</span>
                                        </label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            placeholder={t('contactPage.placeholders.name')}
                                            disabled={isSending}
                                            className={`bg-slate-50 dark:bg-slate-800 ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p> }
                                    </div>

                                    {/* Phone & Email Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                                                {t('contactPage.labels.phone')}
                                            </label>
                                            <Input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                placeholder={t('contactPage.placeholders.phone')}
                                                className={`bg-slate-50 dark:bg-slate-800 ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                                                {t('contactPage.labels.email')} <span className="text-red-500 ml-0.5">*</span>
                                            </label>
                                            <Input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                placeholder={t('contactPage.placeholders.email')}
                                                disabled={isSending}
                                                className={`bg-slate-50 dark:bg-slate-800 ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                                            {t('contactPage.labels.message')} <span className="text-red-500 ml-0.5">*</span>
                                        </label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value )}
                                            placeholder={t('contactPage.placeholders.message')}
                                            rows={4}
                                            disabled={isSending}
                                            className={`bg-slate-50 dark:bg-slate-800 resize-none ${errors.message ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                                    </div>

                                    {/* Success/Error Status Message Box */}
                                    {status.message && (
                                        <div className={`p-3 rounded-md flex items-start gap-2 text-sm animate-in fade-in slide-in-from-top-2 ${
                                            status.type === 'success'
                                                ? 'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900'
                                                : 'bg-red-100 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900'
                                        }`}>
                                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0"/> : <AlertCircle className="w-5 h-5 flex-shrink-0"/>}
                                            <span>{status.message}</span>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-orange-200 shadow-lg"
                                        disabled={isSending}
                                    >
                                        {isSending ? (
                                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                        ) : (
                                            <Send className="mr-2 w-4 h-4" />
                                        )}
                                        {isSending ? 'Sending...' : t('contactPage.button')}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Column 2: Info & Support (Center) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Info List */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <div className={`w-10 h-10 ${info.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <info.icon className={`w-5 h-5 ${info.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 dark:text-white text-sm">{info.title}</h3>
                                            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{info.content}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Support Section */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-lg flex-grow flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <Phone className="w-5 h-5 text-orange-600" />
                                {t('contactPage.supportTitle')}
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                {/* Support Person 1 */}
                                <a href="#" className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/10 p-4 border border-orange-100 dark:border-orange-900/50 hover:border-orange-300 transition-all">
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                            <div className="absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-sm animate-pulse"></div>
                                            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-0.5">Hotline 1</div>
                                            <div className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-orange-600 transition-colors">0979.866.162</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">Ms Phụng Uyên</div>
                                        </div>
                                    </div>
                                </a>

                                {/* Support Person 2 */}
                                <a href="#" className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/10 p-4 border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 transition-all">
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-sm animate-pulse"></div>
                                            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Hotline 2</div>
                                            <div className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-blue-600 transition-colors">0976.888.999</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">Ms Minh Hải</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Map (Right) */}
                    <div className="lg:col-span-4 h-[400px] lg:h-auto">
                        <Card className="h-full border-0 shadow-lg overflow-hidden flex flex-col">
                            <CardContent className="p-0 flex-grow relative">
                                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
                                    <div
                                        ref={mapContainerRef}
                                        className="w-full h-full z-0"
                                    ></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}