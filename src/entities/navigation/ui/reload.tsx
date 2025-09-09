"use client";

import { redirect } from "next/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Button } from "@/shared/ui/button";

export const ReloadButton = () => {
  const handleRedirect = () => redirect(ROUTER_PATHS.DISCOVER);
  return (
    <Button onClick={handleRedirect} className="w-50">
      Reload
    </Button>
  );
};
