import { headers } from "next/headers";

export const useMobileAgent = async () => {
  if (typeof window === "undefined") {
    const userAgent = (await headers()).get("user-agent") || "";
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
  }

  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
};
