import { DocToJSON } from "./types";

const getLinkTags = (urls: string[]) =>
  urls.map((url) => `<link rel="stylesheet" href="${url}">`);

const getScriptTags = (urls: string[]) =>
  urls.map((url) => `<script src="${url}"></script>`);

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
      ${cssCode.join("")}
    </style>
  </head>
  <body>
    ${htmlCode.join("")}
    <script>
      ${jsCode.join("")}
    </script>
  </body>
</html>`;
};
