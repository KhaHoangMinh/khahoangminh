import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Sidebar } from '@/components/atoms/sidebar';

export function BlogLayout({ children, sidebar }) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <main className="lg:col-span-2">
                {children}
            </main>
            <aside className="lg:col-span-1">
                {sidebar}
            </aside>
        </div>
        <Footer />
        </div>
    );
}