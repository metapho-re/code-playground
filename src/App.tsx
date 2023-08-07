import { CodeMirror, useCodeMirrorState } from "./code-mirror";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "./code-samples";
import { getSrcDoc } from "./getSrcDoc";
import "./App.css";

function App() {
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

  return (
    <div id="container">
      <CodeMirror
        doc={htmlCodeSample}
        languageExtension={htmlExtension}
        onChange={onHtmlCodeChange}
      />
      <CodeMirror
        doc={cssCodeSample}
        languageExtension={cssExtension}
        onChange={onCssCodeChange}
      />
      <CodeMirror
        doc={jsCodeSample}
        languageExtension={jsExtension}
        onChange={onJsCodeChange}
      />
      <iframe srcDoc={srcDoc} />
    </div>
  );
}

export default App;
