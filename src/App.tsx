import { useState } from "react";
import { CodeMirror, useCodeMirrorState } from "./code-mirror";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { getSrcDoc } from "./getSrcDoc";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Layout, PanelId } from "./types";
import "./App.css";

function App() {
  const [layout, setLayout] = useState(Layout.Balanced);
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

  return (
    <>
      <Header layout={layout} onLayoutChange={handleLayoutChange} />
      <div id="container" className={layout}>
        <Panel
          expandedPanelId={expandedPanelId}
          referencePanelId="html"
          onResize={handleResizeFactory("html")}
        >
          <CodeMirror
            doc={htmlCodeSample}
            languageExtension={htmlExtension}
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
    </>
  );
}

export default App;
