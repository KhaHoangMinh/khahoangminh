import { ProductCard, type ProductSummary } from '@/components/molecules';

interface ProductsSectionProps {
    title: string;
    description: string;
    products: ProductSummary[];
}

export function ProductsSection({ title, description, products }: ProductsSectionProps) {
    return (
        <section className="section-frame-half surface-canvas">
            <div className="container-khm">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-2.5" />
                    <h2 className="heading-section mb-2">
                        {title}
                    </h2>
                    <p className="text-lead max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
