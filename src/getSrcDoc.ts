import { DocToJSON } from "./types";

interface Props {
  htmlCode: DocToJSON;
  cssCode: DocToJSON;
  jsCode: DocToJSON;
}

export const getSrcDoc = ({ htmlCode, cssCode, jsCode }: Props): string => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
