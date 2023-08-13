import { EditorState } from "@codemirror/state";

export type DocToJSON = ReturnType<EditorState["doc"]["toJSON"]>;

export enum Layout {
  Balanced = "",
  HorizontalStack = "horizontal-stack",
  VerticalStack = "vertical-stack",
}

export type PanelId = "html" | "css" | "js" | "frame";

export enum Theme {
  Dark = "dark",
  Light = "light",
}
