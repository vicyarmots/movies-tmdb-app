export const activeTab = {
  topRated: "Top rated",
  popular: "Popular",
  upcoming: "Upcoming",
} as const;

export type ActiveTabKey = keyof typeof activeTab;

