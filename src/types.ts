import { EditorState } from "@codemirror/state";

export type DocToJSON = ReturnType<EditorState["doc"]["toJSON"]>;
