import { Card, CardContent } from '@/components/atoms';

export function LocationMap() {
    return (
        <Card className="h-full border border-slate-200/80 dark:border-slate-800 shadow-lg rounded-2xl overflow-hidden flex flex-col">
            <CardContent className="p-0 flex-grow relative min-h-[360px] h-full">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
                    <iframe
                        src="https://maps.google.com/maps?q=10.813049,106.597400&hl=vi&z=15&output=embed"
                        className="w-full h-full border-0 z-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kha Hoang Minh Location"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
