"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ActiveTabKey, activeTab } from "../model/types/types";

const DEFAULT_TAB: ActiveTabKey = "topRated";

export const useMoviesTabParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTab = (searchParams.get("tab") as ActiveTabKey) || DEFAULT_TAB;
  const currentTabTitle = activeTab[currentTab];

  const handleTabClick = (tab: ActiveTabKey) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", tab);
    router.push(`/discover?${params.toString()}`);
  };

  return { currentTab, currentTabTitle, handleTabClick };
};
