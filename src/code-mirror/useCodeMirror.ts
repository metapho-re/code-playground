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
import {
  Compartment,
  EditorState,
  EditorStateConfig,
  Extension,
} from "@codemirror/state";
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
import { kanagawaDark } from "./kanagawaDark";
import { kanagawaLight } from "./kanagawaLight";
import { DocToJSON, Theme } from "../types";

interface Props {
  doc?: EditorStateConfig["doc"];
  languageExtension: Extension;
  theme: Theme;
  onChange: (docToJSON: DocToJSON) => void;
}

export const useCodeMirror = ({
  doc,
  languageExtension,
  theme,
  onChange,
}: Props): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<EditorView>();

  const themeCompartment = useMemo(() => new Compartment(), []);

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
      themeCompartment.of(kanagawaDark),
      languageExtension,
    ],
    [languageExtension, onChange, themeCompartment]
  );

  useEffect(() => {
    if (view) {
      view.dispatch({
        effects: themeCompartment.reconfigure(
          theme === Theme.Dark ? kanagawaDark : kanagawaLight
        ),
      });
    }
  }, [theme, themeCompartment, view]);

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
