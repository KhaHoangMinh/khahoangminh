import { useState, useEffect, useCallback } from 'react';
import { SolarDate } from 'lunar-date-vn';
import { SPECIAL_EVENTS } from '@/config';
import { useLocalStorage } from '@/hooks';

export function useSpecialEvent() {
    const [activeEvent, setActiveEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [lastSeenDate, setLastSeenDate] = useLocalStorage('lastSeenSpecialEvent', null);

    useEffect(() => {
        const today = new Date();
        const solarDay = today.getDate();
        const solarMonth = today.getMonth() + 1;
        const solarYear = today.getFullYear();

        const solar = new SolarDate(today);
        const lunar = solar.toLunarDate();

        // Find matching event
        const currentEvent = SPECIAL_EVENTS.find(event => {
            if (event.type === 'solar') {
                return event.month === solarMonth && event.days.includes(solarDay);
            }
            if (event.type === 'lunar') {
                return event.month === lunar.month && event.days.includes(lunar.day);
            }
            return false;
        });

        if (currentEvent) {
            setActiveEvent(currentEvent);
            
            // Generate a unique ID for today
            const todayStr = `${currentEvent.id}-${solarYear}-${solarMonth}-${solarDay}`;
            
            // If they haven't seen today's specific event, pop it open
            if (lastSeenDate !== todayStr) {
                setIsModalOpen(true);
                setLastSeenDate(todayStr);
            }
        }
    }, [lastSeenDate, setLastSeenDate]);

    // Expose a manual trigger for the user to reopen it from the header
    const openModal  = useCallback(() => setIsModalOpen(true),  []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

    return { activeEvent, isModalOpen, openModal, closeModal };
}