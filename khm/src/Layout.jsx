import React, { useEffect } from 'react';
import { MainLayout } from '@/components/templates';
import { SpecialEventModal } from '@/components/organisms';
import { useSpecialEvent } from '@/hooks';

export default function Layout({ children, currentPageName }) {

    const { activeEvent, isModalOpen, openModal, closeModal } = useSpecialEvent();

    // Global hook to prevent right-clicking on images
    useEffect(() => {
        const handleContextMenu = (e) => {
            if (e.target && e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        // Attach the listener to the whole document
        document.addEventListener('contextmenu', handleContextMenu);

        // Cleanup the listener
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <>
            <MainLayout 
                currentPageName={currentPageName} 
                activeEvent={activeEvent}
                onOpenSpecialEvent={openModal}
            >
                {children}
            </MainLayout>

            <SpecialEventModal 
                event={activeEvent} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </>
    );
}