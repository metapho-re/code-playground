import { useState } from "react";
import { CodeMirror, useCodeMirrorState } from "./code-mirror";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { getSrcDoc } from "./getSrcDoc";
import { Header } from "./header";
import { Layout } from "./types";
import "./App.css";

function App() {
  const [layout, setLayout] = useState(Layout.Balanced);

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

  const handleLayoutChange = (layout: Layout) => {
    setLayout(layout);
  };

  return (
    <>
      <Header layout={layout} onLayoutChange={handleLayoutChange} />
      <div id="container" className={layout}>
        <CodeMirror
          doc={htmlCodeSample}
          languageExtension={htmlExtension}
          name="html"
          onChange={onHtmlCodeChange}
        />
        <CodeMirror
          doc={cssCodeSample}
          languageExtension={cssExtension}
          name="css"
          onChange={onCssCodeChange}
        />
        <CodeMirror
          doc={jsCodeSample}
          languageExtension={jsExtension}
          name="js"
          onChange={onJsCodeChange}
        />
        <iframe srcDoc={srcDoc} />
      </div>
    </>
  );
}

export default App;
