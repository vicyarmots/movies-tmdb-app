"use client";

import { useMoviesStore } from "@/shared/libs/store/use-movies-store";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Database, Eye, Film, Heart } from "lucide-react";

export const StatisticsCard = () => {
  const { movies } = useMoviesStore();

  const stats = {
    total: movies.length,
    watched: movies.filter((m) => m.isWatched).length,
    unwatched: movies.filter((m) => !m.isWatched).length,
    favorites: movies.filter((m) => m.isFavorite).length,
    highPriority: movies.filter((m) => m.priority === "High").length,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          Statistics
        </CardTitle>
        <CardDescription>Your movie watchlist overview.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Total Movies</span>
              </div>
              <Badge variant="secondary">{stats.total}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-500" />
                <span className="text-sm">Watched</span>
              </div>
              <Badge className="bg-green-500 text-white">{stats.watched}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span className="text-sm">To Watch</span>
              </div>
              <Badge className="bg-orange-500 text-white">{stats.unwatched}</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">Favorites</span>
              </div>
              <Badge className="bg-red-500 text-white">{stats.favorites}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-sm">High Priority</span>
              </div>
              <Badge className="bg-red-500 text-white">{stats.highPriority}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-muted" />
                <span className="text-sm">Completion</span>
              </div>
              <Badge variant="outline">
                {stats.total > 0 ? Math.round((stats.watched / stats.total) * 100) : 0}%
              </Badge>
            </div>
          </div>
        </div>

        {stats.total > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>
                {stats.watched} of {stats.total} watched
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(stats.watched / stats.total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
