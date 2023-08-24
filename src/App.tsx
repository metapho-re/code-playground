import { useRef, useState } from "react";
import { CodeMirror, useCodeMirrorState } from "./code-mirror";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { Dialog } from "./dialog";
import { Header } from "./header";
import { Panel } from "./panel";
import { getSrcDoc, getUrlsFromResources } from "./utils";
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
  } = useCodeMirrorState("html", htmlCodeSample.split("\n"));

  const {
    code: cssCode,
    languageExtension: cssExtension,
    onCodeChange: onCssCodeChange,
  } = useCodeMirrorState("css", cssCodeSample.split("\n"));

  const {
    code: jsCode,
    languageExtension: jsExtension,
    onCodeChange: onJsCodeChange,
  } = useCodeMirrorState("javascript", jsCodeSample.split("\n"));

  const srcDoc = getSrcDoc({
    htmlCode,
    cssCode,
    jsCode,
    cssUrls: getUrlsFromResources(resources.css),
    jsUrls: getUrlsFromResources(resources.js),
  });

  const handleResizeFactory = (panelId: PanelId) => () => {
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
      <div id="container" className={layout}>
        <Panel
          expandedPanelId={expandedPanelId}
          referencePanelId="html"
          onResize={handleResizeFactory("html")}
        >
          <CodeMirror
            doc={htmlCodeSample}
            languageExtension={htmlExtension}
            theme={theme}
            onChange={onHtmlCodeChange}
          />
        </Panel>
        <Panel
          expandedPanelId={expandedPanelId}
          referencePanelId="css"
          onResize={handleResizeFactory("css")}
        >
          <CodeMirror
            doc={cssCodeSample}
            languageExtension={cssExtension}
            theme={theme}
            onChange={onCssCodeChange}
          />
        </Panel>
        <Panel
          expandedPanelId={expandedPanelId}
          referencePanelId="js"
          onResize={handleResizeFactory("js")}
        >
          <CodeMirror
            doc={jsCodeSample}
            languageExtension={jsExtension}
            theme={theme}
            onChange={onJsCodeChange}
          />
        </Panel>
        <Panel
          expandedPanelId={expandedPanelId}
          referencePanelId="frame"
          onResize={handleResizeFactory("frame")}
        >
          <iframe srcDoc={srcDoc} />
        </Panel>
      </div>
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
