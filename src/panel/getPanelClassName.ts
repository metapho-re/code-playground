import { PanelId } from "../types";

interface Props {
  expandedPanelId: PanelId | null;
  referencePanelId: PanelId;
}

export const getPanelClassName = ({
  expandedPanelId,
  referencePanelId,
}: Props): string => {
  if (referencePanelId === expandedPanelId) {
    return "panel panel_full-screen";
  }

  if (expandedPanelId && referencePanelId !== expandedPanelId) {
    return "panel panel_hidden";
  }

  return "panel";
};
