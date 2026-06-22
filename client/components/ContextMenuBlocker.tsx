"use client";

import { useEffect } from "react";

export function ContextMenuBlocker() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return null;
}