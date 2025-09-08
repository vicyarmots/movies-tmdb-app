"use client";

import { SidebarProvider } from "@/shared/ui/sidebar";
import type { FC, PropsWithChildren } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { useIsMobile } from "@/shared/ui/use-mobile";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen bg-background w-full">
        <Sidebar />
        <main className={`flex-1 ${isMobile ? "pl-0" : "pl-70"}`}>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};
