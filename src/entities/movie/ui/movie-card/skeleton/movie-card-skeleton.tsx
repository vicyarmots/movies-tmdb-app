import { Card, CardContent } from "@ui/card";
import { Skeleton } from "@ui/skeleton";

interface MovieCardSkeletonProps {
  viewMode: "grid" | "list";
}

export function MovieCardSkeleton({ viewMode }: MovieCardSkeletonProps) {
  if (viewMode === "list") {
    return (
      <Card className="group relative overflow-hidden bg-card border-border/40 animate-pulse">
        <div className="flex gap-4 p-4">
          <div className="flex-shrink-0">
            <Skeleton className="w-16 sm:w-20 h-24 sm:h-28 rounded-md" />
          </div>

          <div className="flex-1 space-y-2 sm:space-y-3">
            <Skeleton className="h-4 sm:h-5 w-3/4 max-w-xs" />

            <div className="flex items-center gap-2 sm:gap-4">
              <Skeleton className="h-3 sm:h-4 w-12 sm:w-16" />
              <Skeleton className="h-3 sm:h-4 w-8 sm:w-12" />
            </div>

            <Skeleton className="h-3 sm:h-4 w-16 sm:w-20" />

            <div className="flex gap-2 pt-1 sm:pt-2">
              <Skeleton className="h-5 sm:h-6 w-12 sm:w-16 rounded-full" />
              <Skeleton className="h-5 sm:h-6 w-16 sm:w-20 rounded-full" />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group relative overflow-hidden bg-card border-border/40 animate-pulse">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Skeleton className="absolute inset-0" />
      </div>

      <CardContent className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
        <Skeleton className="h-3 sm:h-4 w-full" />

        <Skeleton className="h-2.5 sm:h-3 w-2/3" />

        <div className="flex gap-1 pt-0.5 sm:pt-1">
          <Skeleton className="h-4 sm:h-5 w-10 sm:w-12 rounded-full" />
        </div>

        <div className="flex justify-between items-center pt-1 sm:pt-2">
          <div className="flex gap-1">
            <Skeleton className="h-3 sm:h-4 w-3 sm:w-4 rounded-full" />
            <Skeleton className="h-3 sm:h-4 w-3 sm:w-4 rounded-full" />
          </div>
          <Skeleton className="h-4 sm:h-5 w-6 sm:w-8 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
