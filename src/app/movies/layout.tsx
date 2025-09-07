import type { FC, PropsWithChildren } from "react";
import { Layout } from "@/widgets/layout/layout";

const MoviesLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default MoviesLayout;
