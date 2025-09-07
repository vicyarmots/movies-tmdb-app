import { Skeleton } from "@ui/skeleton";
import { Button } from "@ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";

export function MovieDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto animate-pulse">
      <div className="mb-6">
        <Button variant="ghost" className="hover:bg-muted/80">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Movies
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <div className="relative aspect-[2/3]">
              <Skeleton className="absolute inset-0" />
            </div>

            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />

              <div className="my-3">
                <Skeleton className="h-px w-full" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Skeleton className="h-8 w-full rounded-md" />
                <Skeleton className="h-8 w-full rounded-md" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-18 rounded-full" />
            </div>

            <Skeleton className="h-10 w-3/4 mb-2" />

            <div className="flex flex-wrap items-center gap-6 mb-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          <Skeleton className="h-px w-full" />

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-20" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-16" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <div key={index}>
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/40">
                <Skeleton className="h-4 w-24 mb-2" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-32 rounded-md" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
