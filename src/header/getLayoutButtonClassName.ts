import { Layout } from "../types";

interface Props {
  layout: Layout;
  referenceLayout: Layout;
}

export const getLayoutButtonClassName = ({
  layout,
  referenceLayout,
}: Props): string =>
  `header-item__button${
    layout === referenceLayout ? " header-item__button_selected" : ""
  }`;
