import { Resource } from "../types";

export const getUrlsFromResources = (resources: Resource[]): string[] =>
  resources.map(({ url }) => url);
