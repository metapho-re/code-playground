import { ChangeEventHandler, RefObject, useState } from "react";
import { Tabs } from "./Tabs";
import { Resource, ResourceType } from "../types";
import "./Dialog.css";

interface Props {
  dialogRef: RefObject<HTMLDialogElement | null>;
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

  const handleResourceTypeSelection = (resourceType: ResourceType) => {
    setSelectedResourceType(resourceType);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValues((previousState) => ({
      ...previousState,
      [selectedResourceType]: event.target.value,
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
    <dialog className="dialog" ref={dialogRef}>
      <div className="dialog-header">
        <h1 className="dialog-header__title">External CSS or JS management</h1>
      </div>
      <Tabs
        inputValue={inputValues[selectedResourceType]}
        resources={resources[selectedResourceType]}
        selectedResourceType={selectedResourceType}
        onInputChange={handleInputChange}
        onResourceAddition={handleResourceAddition}
        onResourceDeletion={handleResourceDeletion}
        onResourceTypeSelection={handleResourceTypeSelection}
      />
      <div className="dialog-footer">
        <button
          className="dialog-footer__button"
          title="Close dialog"
          onClick={handleDialogClose}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};
