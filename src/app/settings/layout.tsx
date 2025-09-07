import type { FC, PropsWithChildren } from "react";
import { Layout } from "@/widgets/layout/layout";

const SettingsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default SettingsLayout;
