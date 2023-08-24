import { Extension } from "@codemirror/state";
import { useMemo, useState } from "react";
import { debounce } from "./debounce";
import { languages } from "./languages";
import { DocToJSON } from "../types";

interface Props {
  language: keyof typeof languages;
  initialState: DocToJSON;
}

export const useCodeMirrorState = ({
  language,
  initialState,
}: Props): {
  code: DocToJSON;
  languageExtension: Extension;
  onCodeChange: (docToJSON: DocToJSON) => void;
} => {
  const [code, setCode] = useState<DocToJSON>(initialState);

  const languageExtension = useMemo(() => languages[language](), [language]);

  const onCodeChange = useMemo(
    () =>
      debounce((docToJSON: DocToJSON) => {
        setCode(docToJSON);
      }),
    []
  );

  return { code, languageExtension, onCodeChange };
};
