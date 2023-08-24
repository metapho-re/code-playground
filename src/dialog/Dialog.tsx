import { ChangeEventHandler, RefObject, useState } from "react";
import { details } from "./details";
import { getTabsButtonClassName } from "./getTabsButtonClassName";
import { Tab } from "./Tab";
import { Resource, ResourceType } from "../types";
import "./Dialog.css";

interface Props {
  dialogRef: RefObject<HTMLDialogElement>;
  resources: Record<ResourceType, Resource[]>;
  onResourceAddition: (resourceType: ResourceType, url: string) => void;
  onResourceDeletion: (resourceType: ResourceType, id: string) => void;
}

export const Dialog = ({
  dialogRef,
  resources,
  onResourceAddition,
  onResourceDeletion,
}: Props) => {
  const [selectedResourceType, setSelectedResourceType] =
    useState<ResourceType>("css");
  const [inputValues, setInputValues] = useState<Record<ResourceType, string>>({
    css: "",
    js: "",
  });

  const handleResourceTypeSelectionFactory =
    (resourceType: ResourceType) => () => {
      setSelectedResourceType(resourceType);
    };

  const handleInputChangeFactory =
    (resourceType: ResourceType): ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setInputValues((previousState) => ({
        ...previousState,
        [resourceType]: event.target.value,
      }));
    };

  const handleResourceAddition = () => {
    if (inputValues[selectedResourceType].length > 0) {
      onResourceAddition(
        selectedResourceType,
        inputValues[selectedResourceType]
      );
      setInputValues((previousState) => ({
        ...previousState,
        [selectedResourceType]: "",
      }));
    }
  };

  const handleResourceDeletion = (id: string) => {
    onResourceDeletion(selectedResourceType, id);
  };

  const handleDialogClose = () => {
    setInputValues({ css: "", js: "" });
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef}>
      <button
        className={getTabsButtonClassName({
          resourceType: "css",
          selectedResourceType,
        })}
        onClick={handleResourceTypeSelectionFactory("css")}
      >
        CSS
      </button>
      <button
        className={getTabsButtonClassName({
          resourceType: "js",
          selectedResourceType,
        })}
        onClick={handleResourceTypeSelectionFactory("js")}
      >
        JS
      </button>
      <Tab
        details={details[selectedResourceType]}
        inputValue={inputValues[selectedResourceType]}
        resources={resources[selectedResourceType]}
        onInputChange={handleInputChangeFactory(selectedResourceType)}
        onResourceAddition={handleResourceAddition}
        onResourceDeletion={handleResourceDeletion}
      />
      <div>
        <button onClick={handleDialogClose}>Close</button>
      </div>
    </dialog>
  );
};
