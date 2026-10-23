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
        <div className="min-h-dvh bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors flex flex-col">
            {/* Header */}
            <Header 
                currentPageName={currentPageName} 
                activeEvent={activeEvent}
                onOpenSpecialEvent={onOpenSpecialEvent}
            />
            
            {/* Main Content */}
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            
            {/* Footer */}
            <Footer activeEvent={activeEvent} />
        </div>
    );
}
