import { RefObject } from "react";
import {
  BalancedLayoutIcon,
  DependenciesIcon,
  HorizontalStackLayoutIcon,
  ThemeIcon,
  VerticalStackLayoutIcon,
} from "../icons";
import { getLayoutButtonClassName } from "./getLayoutButtonClassName";
import { Layout, Theme } from "../types";
import "./Header.css";

interface Props {
  dialogRef: RefObject<HTMLDialogElement>;
  layout: Layout;
  theme: Theme;
  onLayoutChange: (layout: Layout) => void;
  onThemeChange: () => void;
}

export const Header = ({
  dialogRef,
  layout,
  theme,
  onLayoutChange,
  onThemeChange,
}: Props) => {
  const handleLayoutChangeFactory = (layout: Layout) => () => {
    onLayoutChange(layout);
  };

  const handleDialogOpen = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div id="header">
      <div>
        <p>Layout</p>
        <button
          className={getLayoutButtonClassName({
            layout,
            referenceLayout: Layout.Balanced,
          })}
          title="Switch to balanced layout"
          onClick={handleLayoutChangeFactory(Layout.Balanced)}
        >
          <BalancedLayoutIcon />
        </button>
        <button
          className={getLayoutButtonClassName({
            layout,
            referenceLayout: Layout.HorizontalStack,
          })}
          title="Switch to horizontal stack layout"
          onClick={handleLayoutChangeFactory(Layout.HorizontalStack)}
        >
          <HorizontalStackLayoutIcon />
        </button>
        <button
          className={getLayoutButtonClassName({
            layout,
            referenceLayout: Layout.VerticalStack,
          })}
          title="Switch to vertical stack layout"
          onClick={handleLayoutChangeFactory(Layout.VerticalStack)}
        >
          <VerticalStackLayoutIcon />
        </button>
      </div>
      <div>
        <p>Theme</p>
        <button title="Switch theme" onClick={onThemeChange}>
          <ThemeIcon theme={theme} />
        </button>
      </div>
      <div>
        <p>Dependencies</p>
        <button title="Add external dependencies" onClick={handleDialogOpen}>
          <DependenciesIcon />
        </button>
      </div>
    </div>
  );
};
