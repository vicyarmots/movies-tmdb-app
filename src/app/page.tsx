import { ROUTER_PATHS } from "@/shared/libs/router/router";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect(ROUTER_PATHS.MOVIES);
}
