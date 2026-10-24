import { CapabilityCard } from '@/components/molecules';

interface CapabilitiesSectionProps {
    title: string;
    completedTitle: string;
    completedList: string[];
    clientsTitle: string;
    clientsList: string[];
}

export function CapabilitiesSection({
    title,
    completedTitle,
    completedList,
    clientsTitle,
    clientsList,
}: CapabilitiesSectionProps) {
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
                    <CapabilityCard 
                        title={completedTitle}
                        items={completedList}
                        colorTheme="orange"
                    />
                    <CapabilityCard 
                        title={clientsTitle}
                        items={clientsList}
                        colorTheme="amber"
                    />
                </div>
            </div>
        </section>
    );
}
