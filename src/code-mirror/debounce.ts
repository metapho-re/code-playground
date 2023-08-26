import { DocToJSON } from "../types";

type FunctionToDebounce = (docToJSON: DocToJSON) => void;

export const debounce = (
  functionToDebounce: FunctionToDebounce
): FunctionToDebounce => {
  let timer: number;

  return (docToJSON: DocToJSON) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      functionToDebounce(docToJSON);
    }, 3000);
  };
};
