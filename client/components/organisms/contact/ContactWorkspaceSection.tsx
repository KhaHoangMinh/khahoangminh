import React from 'react';
import { ContactFormSection } from './ContactFormSection';
import { ContactInfoSection } from './ContactInfoSection';
import { LocationMap } from './LocationMap';

export function ContactWorkspaceSection() {
    return (
        <section className="section-frame-full surface-canvas">
            <div className="container-khm">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* Column 1: Contact Form */}
                    <div className="md:col-span-1 xl:col-span-5">
                        <ContactFormSection />
                    </div>

                    {/* Column 2: Info & Support */}
                    <div className="md:col-span-1 xl:col-span-4 flex flex-col gap-5">
                        <ContactInfoSection />
                    </div>

                    {/* Column 3: Map (Full width on Tablet/Laptop, 3 cols on XL Desktop) */}
                    <div className="md:col-span-2 xl:col-span-3 min-h-[360px] xl:min-h-full">
                        <LocationMap />
                    </div>
                </div>
            </div>
        </section>
    );
}
