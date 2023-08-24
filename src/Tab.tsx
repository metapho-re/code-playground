import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Resource } from "./types";
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
  const handleResourceDeletionFactory = (id: string) => () => {
    onResourceDeletion(id);
  };

  const handleResourceAddition: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.code === "Enter") {
      onResourceAddition();
    }
  };

  return (
    <div id="tab">
      <div>
        <p>{details}</p>
      </div>
      <div>
        <input
          type="url"
          placeholder="Type in a valid URL..."
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={handleResourceAddition}
        />
        <button onClick={onResourceAddition}>Add</button>
      </div>
      <div id="list">
        {resources.map(({ id, url }, index) => (
          <div key={id} className="list-item">
            <p>
              {index + 1}. {url}
            </p>
            <button onClick={handleResourceDeletionFactory(id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};
