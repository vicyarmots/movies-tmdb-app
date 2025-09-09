"use client";

import { Film } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/entities/navigation/ui/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { SidebarContent, SidebarHeader, Sidebar as SidebarUI } from "@/shared/ui/sidebar";
import { MovieFiltersWidget } from "../../movies/movies-filters/movies-filters";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <SidebarUI className="w-70 border-r border-border/40">
      <SidebarHeader className="p-4 border-b border-border/40">
        <Link href={ROUTER_PATHS.DISCOVER}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Film className="w-6 h-6 text-orange-500" />
            <h1 className="font-bold text-lg">MoviesTMDB</h1>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <div className="space-y-4">
          <Navigation />
          {pathname === ROUTER_PATHS.DISCOVER && (
            <div className="border-t border-border/40 pt-4">
              <MovieFiltersWidget />
            </div>
          )}
        </div>
      </SidebarContent>
    </SidebarUI>
  );
};
