import { Extension } from "@codemirror/state";
import { CodeMirror } from "../code-mirror";
import { Panel } from "../panel";
import { getBodyClassName } from "./getBodyClassName";
import { cssCodeSample, htmlCodeSample, jsCodeSample } from "../code-samples";
import { DocToJSON, Layout, PanelId, Theme } from "../types";
import "./Body.css";

interface Props {
  cssExtension: Extension;
  htmlExtension: Extension;
  jsExtension: Extension;
  expandedPanelId: PanelId | null;
  layout: Layout;
  srcDoc: string;
  theme: Theme;
  onCssCodeChange: (docToJSON: DocToJSON) => void;
  onHtmlCodeChange: (docToJSON: DocToJSON) => void;
  onJsCodeChange: (docToJSON: DocToJSON) => void;
  onResize: (panelId: PanelId) => void;
}

export const Body = ({
  cssExtension,
  htmlExtension,
  jsExtension,
  expandedPanelId,
  layout,
  srcDoc,
  theme,
  onCssCodeChange,
  onHtmlCodeChange,
  onJsCodeChange,
  onResize,
}: Props) => {
  const handleResizeFactory = (panelId: PanelId) => () => {
    onResize(panelId);
  };

  return (
    <div className={getBodyClassName(layout)}>
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
        <iframe className="panel-content" srcDoc={srcDoc} />
      </Panel>
    </div>
  );
};
