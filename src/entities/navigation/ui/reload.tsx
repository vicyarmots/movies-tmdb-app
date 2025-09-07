"use client";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";

export const ReloadButton = () => {
  const router = useRouter();
  const handleRedirect = () => router.push(ROUTER_PATHS.MOVIES);

  return (
    <Button onClick={handleRedirect} className="w-50">
      Reload
    </Button>
  );
};
