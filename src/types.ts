import { EditorState } from "@codemirror/state";

export type DocToJSON = ReturnType<EditorState["doc"]["toJSON"]>;

export enum Layout {
  Balanced = "",
  HorizontalStack = "horizontal-stack",
  VerticalStack = "vertical-stack",
}
