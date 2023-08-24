export const getLinkTags = (urls: string[]): string[] =>
  urls.map((url) => `<link rel="stylesheet" href="${url}">`);
