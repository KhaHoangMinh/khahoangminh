import { Header } from '@/components/organisms';
import { Footer } from '@/components/organisms';
import type { SpecialEvent } from '@/config';

interface MainLayoutProps {
    children: React.ReactNode;
    currentPageName?: string;
    activeEvent?: SpecialEvent | null;
    onOpenSpecialEvent?: () => void;
}

export function MainLayout({ children, currentPageName, activeEvent, onOpenSpecialEvent }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors flex flex-col">
            <style>{`
                :root {
                    --radius: 0.5rem;
                }
            `}</style>

            {/* Header */}
            <Header 
                currentPageName={currentPageName} 
                activeEvent={activeEvent}
                onOpenSpecialEvent={onOpenSpecialEvent}
            />
            
            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>
            
            {/* Footer */}
            <Footer activeEvent={activeEvent} />
            
        </div>
    );
}