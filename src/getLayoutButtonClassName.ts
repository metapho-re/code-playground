import { Layout } from "./types";

interface Props {
  layout: Layout;
  referenceLayout: Layout;
}

export const getLayoutButtonClassName = ({ layout, referenceLayout }: Props) =>
  layout === referenceLayout ? "selected" : "";
