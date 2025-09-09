import { Button } from "@/shared/ui/button";
import type { actionsRender } from "../../utils/watchlist-render";

type ToggleActionProps = {
  isActive: boolean;
  onClick: () => void;
  renderConfig: (typeof actionsRender)["watchlist"]["add"];
  renderConfigActive: (typeof actionsRender)["watchlist"]["remove"];
};

export const ToggleAction = ({
  isActive,
  onClick,
  renderConfig,
  renderConfigActive,
}: ToggleActionProps) => {
  const config = isActive ? renderConfigActive : renderConfig;

  return (
    <Button className={config.className} onClick={onClick}>
      {config.icon}
      {config.title}
    </Button>
  );
};
