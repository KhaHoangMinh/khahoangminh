import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/atoms';
import { useLanguage } from "@/services";

export function LocationMap() {
    const { t } = useLanguage();
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const L = (window as any).L;
        if (!L || !mapContainerRef.current) return;

        const lat = 10.813049;
        const lng = 106.597400;

        const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        const map = L.map(mapContainerRef.current, {
            center: [lat, lng],
            zoom: 15,
            layers: [osmLayer] 
        });

        const baseMaps = {
            "Street": osmLayer,
            "Satellite": satelliteLayer
        };
        L.control.layers(baseMaps).addTo(map);

        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`<b style="color:#333">${t('common.companyShortName')}</b><br><span style="color:#666">93/16 Nguyen Thi Tu</span>`)
            .openPopup();

        return () => {
            map.remove();
        };
    }, [t]);

    return (
        <Card className="h-full border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <CardContent className="p-0 flex-grow relative min-h-[400px]">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">

                    <iframe
                        src="https://maps.google.com/maps?q=10.813049,106.597400&hl=en&z=15&output=embed"
                        className="w-full h-full border-0 z-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kha Hoang Minh Location"
                    ></iframe>
                </div>
            </CardContent>
        </Card>
    );
}