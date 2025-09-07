import { SidebarProvider } from "@/shared/ui/sidebar";
import { type FC, type PropsWithChildren } from "react";
import { Sidebar } from "../sidebar/sidebar";

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen bg-background w-full">
        <Sidebar />
        <main className="flex-1 pl-64">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};
