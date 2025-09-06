"use client";
import { SidebarProvider } from "@/shared/ui/sidebar";
import type { FC, PropsWithChildren } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { useApplyTheme } from "@/features/settings/theme/hooks/use-apply-theme";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  useApplyTheme();
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen bg-background w-full">
        <Sidebar />
        <main className="flex-1 pl-64">
          <div className="p-6">{children}</div>∂
        </main>
      </div>
    </SidebarProvider>
  );
};
