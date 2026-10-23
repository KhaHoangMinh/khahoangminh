"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MainLayout } from "@/components/templates";
import { SpecialEventModal } from "@/components/organisms";
import { FloatingSpeedDial } from "@/components/molecules";
import { useSpecialEvent } from "@/hooks";
import { isKnownRoute } from "@/config";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { activeEvent, isModalOpen, openModal, closeModal } = useSpecialEvent();
  const pathname = usePathname();
  
  const isNotFound = !isKnownRoute(pathname);

  // If on a 404 / unknown route, render standalone without Header, Footer, or Event Modal
  if (isNotFound) {
    return (
      <div className="min-h-dvh bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-50 flex flex-col">
        {children}
      </div>
    );
  }

  // Deriving current page name from Next.js pathname
  const currentPageName = pathname === "/" ? "home" : pathname.substring(1);

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

      <FloatingSpeedDial />
    </>
  );
}