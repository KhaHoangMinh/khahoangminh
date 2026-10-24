import { ScopeCard } from '@/components/molecules';

interface BusinessScopeSectionProps {
    title: string;
    productsTitle: string;
    productsList: string[];
    servicesTitle: string;
    servicesList: string[];
}

export function BusinessScopeSection({
    title,
    productsTitle,
    productsList,
    servicesTitle,
    servicesList,
}: BusinessScopeSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ScopeCard 
                        title={productsTitle} 
                        items={productsList} 
                        colorTheme="orange" 
                    />
                    <ScopeCard 
                        title={servicesTitle} 
                        items={servicesList} 
                        colorTheme="amber" 
                    />
                </div>
            </div>
        </section>
    );
}
