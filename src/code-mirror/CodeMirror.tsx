import { EditorStateConfig, Extension } from "@codemirror/state";
import { useCodeMirror } from "./useCodeMirror";
import { DocToJSON } from "../types";

interface Props {
  doc?: EditorStateConfig["doc"];
  languageExtension: Extension;
  onChange: (docToJSON: DocToJSON) => void;
}

export const CodeMirror = ({ doc, languageExtension, onChange }: Props) => {
  const ref = useCodeMirror({ doc, languageExtension, onChange });

  return <div className="panel" ref={ref} />;
};
