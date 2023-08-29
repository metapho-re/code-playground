import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { List } from "./List";
import { Resource } from "../types";
import "./Tab.css";

interface Props {
  details: string;
  inputValue: string;
  resources: Resource[];
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onResourceAddition: () => void;
  onResourceDeletion: (id: string) => void;
}

export const Tab = ({
  details,
  inputValue,
  resources,
  onInputChange,
  onResourceAddition,
  onResourceDeletion,
}: Props) => {
  const handleResourceAddition: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.code === "Enter") {
      onResourceAddition();
    }
  };

  return (
    <div className="tab-body">
      <p className="tab-description">{details}</p>
      <div className="tab-form">
        <input
          className="tab-form__input"
          type="url"
          placeholder="Type in a valid URL..."
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={handleResourceAddition}
        />
        <button
          className="tab-form__button"
          title="Add dependency"
          onClick={onResourceAddition}
        >
          Add
        </button>
      </div>
      <List resources={resources} onResourceDeletion={onResourceDeletion} />
    </div>
  );
};
