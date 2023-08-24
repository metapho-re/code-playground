import { CompressIcon } from "./CompressIcon";
import { ExpandIcon } from "./ExpandIcon";

interface Props {
  isFullScreen: boolean;
}

export const ResizeIcon = ({ isFullScreen }: Props) =>
  isFullScreen ? <CompressIcon /> : <ExpandIcon />;
