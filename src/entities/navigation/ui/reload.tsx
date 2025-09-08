"use client";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";

export const ReloadButton = () => {
  const handleRedirect = () => redirect(ROUTER_PATHS.DISCOVER);
  return (
    <Button onClick={handleRedirect} className="w-50">
      Reload
    </Button>
  );
};
