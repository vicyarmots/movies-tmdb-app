import { cookies } from "next/headers";

export const getServerTheme = async () => {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  const isDarkTheme = themeCookie?.value === "dark";
  return isDarkTheme;
};

export async function setServerTheme(mode: "dark" | "light") {
  const cookieStore = await cookies();
  cookieStore.set("theme", mode, {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
  });
}
