import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import {
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  foldKeymap,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { lintKeymap } from "@codemirror/lint";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import {
  EditorView,
  ViewUpdate,
  crosshairCursor,
  drawSelection,
  dropCursor,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from "@codemirror/view";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { kanagawa } from "./kanagawa";
import { DocToJSON } from "./types";

interface Props {
  doc?: EditorStateConfig["doc"];
  languageExtension: Extension;
  onChange: (docToJSON: DocToJSON) => void;
}

export const useCodeMirror = ({
  doc,
  languageExtension,
  onChange,
}: Props): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<EditorView>();

  const extensions = useMemo(
    () => [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap,
      ]),
      EditorState.allowMultipleSelections.of(true),
      EditorView.updateListener.of(({ docChanged, state }: ViewUpdate) => {
        if (docChanged) {
          onChange(state.doc.toJSON());
        }
      }),
      kanagawa,
      languageExtension,
    ],
    [languageExtension, onChange]
  );

  useEffect(() => {
    if (ref.current && ref.current.children.length === 0) {
      setView(
        new EditorView({
          state: EditorState.create({
            doc,
            extensions,
          }),
          parent: ref.current,
        })
      );
    }

    return () => {
      view?.destroy();
    };
  }, [doc, extensions, view]);

  return ref;
};
