import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { Extension } from "@codemirror/state";
import { useCallback, useMemo, useState } from "react";
import { DocToJSON } from "../types";

const languages = {
  html,
  css,
  javascript,
};

export const useCodeMirrorState = (
  language: keyof typeof languages,
  initialState: DocToJSON
): {
  code: DocToJSON;
  languageExtension: Extension;
  onCodeChange: (docToJSON: DocToJSON) => void;
} => {
  const [code, setCode] = useState<DocToJSON>(initialState);

  const languageExtension = useMemo(() => languages[language](), [language]);

  const onCodeChange = useCallback((docToJSON: DocToJSON) => {
    setCode(docToJSON);
  }, []);

  return { code, languageExtension, onCodeChange };
};
