import { PropsWithChildren } from "react";
import { ResizeIcon } from "../icons";
import { getPanelClassName } from "./getPanelClassName";
import { PanelId } from "../types";
import "./Panel.css";

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
  const title = isFullScreen
    ? "Escape fullscreen mode"
    : "Make panel fullscreen";

  return (
    <div className={className}>
      <div className="panel-header">
        <button
          className="panel-header__button"
          title={title}
          onClick={onResize}
        >
          <ResizeIcon isFullScreen={isFullScreen} />
        </button>
        <p
          className={`panel-header__text panel-header__text_${referencePanelId}`}
        >
          {referencePanelId.toUpperCase()}
        </p>
      </div>
      {children}
    </div>
  );
};
