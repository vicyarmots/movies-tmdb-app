import { redirect } from "next/navigation";
import { ROUTER_PATHS } from "@/shared/libs/router/router";

export default function Root() {
  return redirect(ROUTER_PATHS.DISCOVER);
}
