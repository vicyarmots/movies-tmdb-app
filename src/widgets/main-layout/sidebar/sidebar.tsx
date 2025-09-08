"use client";

import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { SidebarContent, SidebarHeader, Sidebar as SidebarUI } from "@/shared/ui/sidebar";
import { Film } from "lucide-react";
import { Navigation } from "@/entities/navigation/ui/navigation";
import { MovieFilters } from "../../movies/movies-filters/movies-filters";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <SidebarUI className="w-70 border-r border-border/40">
      <SidebarHeader className="p-4 border-b border-border/40">
        <Link href={ROUTER_PATHS.MOVIES}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Film className="w-6 h-6 text-orange-500" />
            <h1 className="font-bold text-lg">MoviesTMDB</h1>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <div className="space-y-4">
          <Navigation />
          {pathname === ROUTER_PATHS.MOVIES && (
            <div className="border-t border-border/40 pt-4">
              <MovieFilters />
            </div>
          )}
        </div>
      </SidebarContent>
    </SidebarUI>
  );
};
