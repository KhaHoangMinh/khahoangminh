import React from 'react';
import { MainLayout } from '@/components/templates/index';

export default function Layout({ children, currentPageName }) {
    return (
        <MainLayout currentPageName={currentPageName}>          
            {children}
        </MainLayout>
    );
}