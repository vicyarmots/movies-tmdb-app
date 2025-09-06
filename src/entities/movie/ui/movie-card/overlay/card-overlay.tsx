import type { FC, PropsWithChildren } from "react";

export const CardOverlay: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="flex gap-2">{children}</div>
    </div>
  );
};
