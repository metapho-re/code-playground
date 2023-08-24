export const getScriptTags = (urls: string[]): string[] =>
  urls.map((url) => `<script src="${url}"></script>`);
