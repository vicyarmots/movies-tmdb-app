"use client";

import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Button } from "@/shared/ui/button";
import { Film, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const sidebarNavigation = [
  {
    icon: <Film className="w-4 h-4 mr-2" />,
    title: "Movies",
    path: ROUTER_PATHS.MOVIES,
  },
  {
    icon: <Settings className="w-4 h-4 mr-2" />,
    title: "Settings",
    path: ROUTER_PATHS.SETTINGS,
  },
];

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {sidebarNavigation.map(({ icon, title, path }) => (
        <Button
          key={title}
          variant={pathname === path ? "default" : "ghost"}
          onClick={() => router.push(path)}
          className={`w-full justify-start ${
            pathname === path ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-muted/80"
          }`}
        >
          {icon}
          {title}
        </Button>
      ))}
    </div>
  );
};
