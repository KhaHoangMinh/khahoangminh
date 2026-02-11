import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, MapPin, ReceiptText } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/services/LanguageProvider';

export default function Footer() {
    const { t } = useLanguage();
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    const navItems = [
        { name: t('nav.home'), page: 'Home' },
        { name: t('nav.about'), page: 'About' },
        { name: t('nav.products'), page: 'Products' },
        { name: t('nav.services'), page: 'Services' },
        { name: t('nav.projects'), page: 'Projects' },
        { name: t('nav.news'), page: 'News' },
        { name: t('nav.contact'), page: 'Contact' },
    ];

    useEffect(() => {
        // Ensure Leaflet is loaded and the container exists
        if (!window.L || !mapContainerRef.current) return;

        if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
        }

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

        mapInstanceRef.current = map;

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
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [t]);


    return (
        <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="lg:col-span-1 gap-3">
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/img/logo.png" className="w-12 h-12"  alt='logo'/>
                                <span className="font-bold text-xl tracking-tight text-white">{t('common.companyShortName')}</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=100054573575093" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-3">
                            {navItems.slice(0, 5).map((item) => (
                                <li key={item.page}>
                                    <Link to={createPageUrl(item.page)} className="text-slate-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">{t('footer.contactUs')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <div>
                                    <span className="text-sm text-slate-400 transition-colors block">0979.866.162 (Ms. Uyên)</span>
                                    <span className="text-sm text-slate-400 transition-colors block">0976.888.999 (Ms. Hải)</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-slate-400">info@khahoangminh.com.vn</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ReceiptText className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-sm text-slate-400">{t('footer.receiptNumber')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-col">
                        <h3 className="text-lg font-bold mb-6 text-orange-500">{t('footer.addressTitle')}</h3>
                        <div className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <p>{t('footer.addressText')}</p>
                        </div>
                        <div
                            ref={mapContainerRef}
                            className="w-full mt-3 h-48 rounded-lg overflow-hidden border border-slate-700 z-0 relative"
                            style={{ minHeight: '200px' }}
                        ></div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                        <p>&copy; 2016 - {new Date().getFullYear()} {t('footer.companyName')}. All rights reserved</p>
                        <div className='flex gap-4'>
                            <img src='/img/bo-cong-thuong.png' alt='' className="h-10" />
                            <p className="flex items-center gap-2">
                                <a href='#' className="text-orange-300 hover:text-orange-500">{t('footer.protection')}</a>
                                <a href='#' className="hover:text-blue-400">{t('footer.privacy')}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}