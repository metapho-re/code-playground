import { useRef, useState } from "react";
import { CodeMirror, useCodeMirrorState } from "./code-mirror";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { getSrcDoc } from "./getSrcDoc";
import { Dialog } from "./Dialog";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Layout, PanelId, Theme } from "./types";
import "./App.css";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [layout, setLayout] = useState(Layout.Balanced);
  const [theme, setTheme] = useState(Theme.Dark);
  const [expandedPanelId, setExpandedPanelId] = useState<PanelId | null>(null);

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

  const srcDoc = getSrcDoc({ htmlCode, cssCode, jsCode });

  const handleResizeFactory = (panelId: PanelId) => () => {
    setExpandedPanelId(panelId === expandedPanelId ? null : panelId);
  };

  const handleLayoutChange = (layout: Layout) => {
    setLayout(layout);
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
      <Dialog dialogRef={dialogRef} />
    </>
  );
}

export default App;
