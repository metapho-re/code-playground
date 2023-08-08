import { BalancedLayoutIcon } from "./BalancedLayoutIcon";
import { HorizontalStackLayoutIcon } from "./HorizontalStackLayoutIcon";
import { VerticalStackLayoutIcon } from "./VerticalStackLayoutIcon";
import { Layout } from "../types";

interface Props {
  onLayoutChange: (layout: Layout) => void;
}

export const Header = ({ onLayoutChange }: Props) => {
  const handleLayoutChangeFactory = (layout: Layout) => () => {
    onLayoutChange(layout);
  };

  return (
    <div id="header">
      <div>
        <p>Layout</p>
        <button onClick={handleLayoutChangeFactory(Layout.Balanced)}>
          <BalancedLayoutIcon />
        </button>
        <button onClick={handleLayoutChangeFactory(Layout.HorizontalStack)}>
          <HorizontalStackLayoutIcon />
        </button>
        <button onClick={handleLayoutChangeFactory(Layout.VerticalStack)}>
          <VerticalStackLayoutIcon />
        </button>
      </div>
    </div>
  );
};
