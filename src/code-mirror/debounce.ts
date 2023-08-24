import { DocToJSON } from "../types";

export const debounce = (
  functionToDebounce: (docToJSON: DocToJSON) => void
) => {
  let timer: number;

  return (docToJSON: DocToJSON) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      functionToDebounce(docToJSON);
    }, 3000);
  };
};
