import { EditorStateConfig, Extension } from "@codemirror/state";
import { useCodeMirror } from "./useCodeMirror";
import { DocToJSON, Theme } from "../types";

interface Props {
  doc?: EditorStateConfig["doc"];
  languageExtension: Extension;
  theme: Theme;
  onChange: (docToJSON: DocToJSON) => void;
}

export const CodeMirror = ({
  doc,
  languageExtension,
  theme,
  onChange,
}: Props) => {
  const ref = useCodeMirror({ doc, languageExtension, theme, onChange });

  return <div className="panel-content" ref={ref} />;
};
