import { useRef, useState } from "react";
import { Header } from "./header";
import { Body } from "./body";
import { Dialog } from "./dialog";
import { useCodeMirrorState } from "./code-mirror";
import { getSrcDoc, getUrlsFromResources } from "./utils";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { Layout, PanelId, Resource, ResourceType, Theme } from "./types";
import "./App.css";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [expandedPanelId, setExpandedPanelId] = useState<PanelId | null>(null);
  const [layout, setLayout] = useState(Layout.Balanced);
  const [resources, setResources] = useState<Record<ResourceType, Resource[]>>({
    css: [],
    js: [],
  });
  const [theme, setTheme] = useState(Theme.Dark);

  const {
    code: htmlCode,
    languageExtension: htmlExtension,
    onCodeChange: onHtmlCodeChange,
  } = useCodeMirrorState({
    language: "html",
    initialState: htmlCodeSample.split("\n"),
  });

  const {
    code: cssCode,
    languageExtension: cssExtension,
    onCodeChange: onCssCodeChange,
  } = useCodeMirrorState({
    language: "css",
    initialState: cssCodeSample.split("\n"),
  });

  const {
    code: jsCode,
    languageExtension: jsExtension,
    onCodeChange: onJsCodeChange,
  } = useCodeMirrorState({
    language: "javascript",
    initialState: jsCodeSample.split("\n"),
  });

  const srcDoc = getSrcDoc({
    htmlCode,
    cssCode,
    jsCode,
    cssUrls: getUrlsFromResources(resources.css),
    jsUrls: getUrlsFromResources(resources.js),
  });

  const handleResize = (panelId: PanelId) => {
    setExpandedPanelId(panelId === expandedPanelId ? null : panelId);
  };

  const handleLayoutChange = (layout: Layout) => {
    setLayout(layout);
  };

  const handleResourceAddition = (resourceType: ResourceType, url: string) => {
    setResources((previousState) => ({
      ...previousState,
      [resourceType]: [
        ...previousState[resourceType],
        { id: crypto.randomUUID(), url },
      ],
    }));
  };

  const handleResourceDeletion = (resourceType: ResourceType, id: string) => {
    setResources((previousState) => ({
      ...previousState,
      [resourceType]: previousState[resourceType].filter(
        (resource) => resource.id !== id
      ),
    }));
  };

  const handleThemeChange = () => {
    document.querySelector("#root")?.classList.toggle("light");

    setTheme((previousState) =>
      previousState === Theme.Dark ? Theme.Light : Theme.Dark
    );
  };

  return (
    <>
      <Header
        dialogRef={dialogRef}
        layout={layout}
        theme={theme}
        onLayoutChange={handleLayoutChange}
        onThemeChange={handleThemeChange}
      />
      <Body
        cssExtension={cssExtension}
        htmlExtension={htmlExtension}
        jsExtension={jsExtension}
        expandedPanelId={expandedPanelId}
        layout={layout}
        srcDoc={srcDoc}
        theme={theme}
        onCssCodeChange={onCssCodeChange}
        onHtmlCodeChange={onHtmlCodeChange}
        onJsCodeChange={onJsCodeChange}
        onResize={handleResize}
      />
      <Dialog
        dialogRef={dialogRef}
        resources={resources}
        onResourceAddition={handleResourceAddition}
        onResourceDeletion={handleResourceDeletion}
      />
    </>
  );
}

export default App;
