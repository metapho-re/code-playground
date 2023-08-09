import {
  BalancedLayoutIcon,
  HorizontalStackLayoutIcon,
  VerticalStackLayoutIcon,
} from "./icons";
import { Layout } from "./types";

interface Props {
  layout: Layout;
  onLayoutChange: (layout: Layout) => void;
}

export const Header = ({ layout, onLayoutChange }: Props) => {
  const classNameFactory =
    (referenceLayout: Layout) => (currentLayout: Layout) =>
      referenceLayout === currentLayout ? "selected" : "";

  const handleLayoutChangeFactory = (layout: Layout) => () => {
    onLayoutChange(layout);
  };

  return (
    <div id="header">
      <div>
        <p>Layout</p>
        <button
          className={classNameFactory(Layout.Balanced)(layout)}
          onClick={handleLayoutChangeFactory(Layout.Balanced)}
        >
          <BalancedLayoutIcon />
        </button>
        <button
          className={classNameFactory(Layout.HorizontalStack)(layout)}
          onClick={handleLayoutChangeFactory(Layout.HorizontalStack)}
        >
          <HorizontalStackLayoutIcon />
        </button>
        <button
          className={classNameFactory(Layout.VerticalStack)(layout)}
          onClick={handleLayoutChangeFactory(Layout.VerticalStack)}
        >
          <VerticalStackLayoutIcon />
        </button>
      </div>
    </div>
  );
};
