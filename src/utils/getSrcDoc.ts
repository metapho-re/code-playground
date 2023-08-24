import { getLinkTags } from "./getLinkTags";
import { getScriptTags } from "./getScriptTags";
import { DocToJSON } from "../types";

interface Props {
  htmlCode: DocToJSON;
  cssCode: DocToJSON;
  jsCode: DocToJSON;
  cssUrls: string[];
  jsUrls: string[];
}

export const getSrcDoc = ({
  htmlCode,
  cssCode,
  jsCode,
  cssUrls,
  jsUrls,
}: Props): string => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${getLinkTags(cssUrls).join("\n")}
    ${getScriptTags(jsUrls).join("\n")}
    <style>
      ${cssCode.join("\n")}
    </style>
  </head>
  <body>
    ${htmlCode.join("\n")}
    <script>
      ${jsCode.join("\n")}
    </script>
  </body>
</html>`;
};
