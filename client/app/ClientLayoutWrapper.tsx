"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MainLayout } from "@/components/templates";
import { SpecialEventModal } from "@/components/organisms";
import { useSpecialEvent } from "@/hooks";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { activeEvent, isModalOpen, openModal, closeModal } = useSpecialEvent();
  const pathname = usePathname();
  
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
    </>
  );
}