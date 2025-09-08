"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Film, Settings, User } from "lucide-react";

const sidebarNavigation = [
  {
    icon: <Film className="w-4 h-4 mr-2" />,
    title: "Discover",
    path: ROUTER_PATHS.DISCOVER,
  },
  {
    icon: <Settings className="w-4 h-4 mr-2" />,
    title: "Settings",
    path: ROUTER_PATHS.SETTINGS,
  },
  {
    icon: <User className="w-4 h-4 mr-2" />,
    title: "My watchlist",
    path: ROUTER_PATHS.USER_WATCHLIST,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {sidebarNavigation.map(({ icon, title, path }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            prefetch
            className={`flex w-full items-center px-3 py-2 rounded-md transition-colors ${
              isActive
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "hover:bg-muted/80 text-foreground"
            }`}
          >
            {icon}
            <span>{title}</span>
          </Link>
        );
      })}
    </div>
  );
};
