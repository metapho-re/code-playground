import { PropsWithChildren } from "react";
import { ResizeIcon } from "./icons";
import { PanelId } from "./types";
import { getPanelClassName } from "./getPanelClassName";

interface Props {
  expandedPanelId: PanelId | null;
  referencePanelId: PanelId;
  onResize: () => void;
}

export const Panel = ({
  children,
  expandedPanelId,
  referencePanelId,
  onResize,
}: PropsWithChildren<Props>) => {
  const className = getPanelClassName({ expandedPanelId, referencePanelId });
  const isFullScreen = expandedPanelId === referencePanelId;

  return (
    <div className={className}>
      <div>
        <button onClick={onResize}>
          <ResizeIcon isFullScreen={isFullScreen} />
        </button>
        <p id={referencePanelId}>{referencePanelId.toUpperCase()}</p>
      </div>
      {children}
    </div>
  );
};
