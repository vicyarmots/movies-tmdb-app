import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { Button } from "@/shared/ui/button";

export const BackButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const onBack = () => {
    if (tab) {
      router.push(`${ROUTER_PATHS.DISCOVER}?tab=${tab}`);
    } else {
      router.back();
    }
  };

  return (
    <Button onClick={onBack} variant="ghost" className="hover:bg-muted/80">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Movies
    </Button>
  );
};
