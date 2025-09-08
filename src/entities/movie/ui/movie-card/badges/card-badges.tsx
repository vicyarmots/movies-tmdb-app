// import { TMDBMovieTransformed } from "@/processes/api/types";
// import { Badge } from "@/shared/ui/badge";
// import { getPriorityColor } from "@/shared/utils/get-priority-color/get-priority-color";
// import { Heart } from "lucide-react";
// import type { FC } from "react";

// type MovieCardBadgesProps = Pick<TMDBMovieTransformed, "is_watched" | "is_favorite">;

// export const MovieCardBadges: FC<MovieCardBadgesProps> = ({ is_favorite, is_watched }) => {
//   return (
//     <>
//       <Badge className={`${getPriorityColor(`priority`)} text-white text-xs`}>{"priority"}</Badge>
//       {is_watched && (
//         <Badge variant="secondary" className="bg-green-500 text-white text-xs">
//           Watched
//         </Badge>
//       )}
//       {is_favorite && (
//         <Badge variant="secondary" className="bg-red-500 text-white text-xs">
//           <Heart className="w-3 h-3 fill-current mr-1" />
//         </Badge>
//       )}
//     </>
//   );
// };
