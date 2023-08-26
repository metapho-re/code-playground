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
    <div className="header">
      <div className="header-item">
        <p className="header-item__text">Layout</p>
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
      <div className="header-item">
        <p className="header-item__text">Theme</p>
        <button
          className="header-item__button"
          title="Switch theme"
          onClick={onThemeChange}
        >
          <ThemeIcon theme={theme} />
        </button>
      </div>
      <div className="header-item">
        <p className="header-item__text">Dependencies</p>
        <button
          className="header-item__button"
          title="Add external dependencies"
          onClick={handleDialogOpen}
        >
          <DependenciesIcon />
        </button>
      </div>
    </div>
  );
};
