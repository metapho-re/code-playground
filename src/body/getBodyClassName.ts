import { Layout } from "../types";

export const getBodyClassName = (layout: Layout): string => {
  switch (layout) {
    case Layout.HorizontalStack: {
      return "body body_horizontal-stack";
    }
    case Layout.VerticalStack: {
      return "body body_vertical-stack";
    }
    default: {
      return "body";
    }
  }
};
