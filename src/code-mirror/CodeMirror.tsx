import { EditorStateConfig, Extension } from "@codemirror/state";
import { useCodeMirror } from "./useCodeMirror";
import { DocToJSON } from "../types";

interface Props {
  doc?: EditorStateConfig["doc"];
  languageExtension: Extension;
  name: "html" | "css" | "js";
  onChange: (docToJSON: DocToJSON) => void;
}

export const CodeMirror = ({
  doc,
  languageExtension,
  name,
  onChange,
}: Props) => {
  const ref = useCodeMirror({ doc, languageExtension, onChange });

  return (
    <div className="panel">
      <div>
        <div />
        <p id={name}>{name.toUpperCase()}</p>
      </div>
      <div ref={ref} />
    </div>
  );
};
