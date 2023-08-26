import { ChangeEventHandler } from "react";
import { Tab } from "./Tab";
import { getTabsButtonClassName } from "./getTabsButtonClassName";
import { details } from "./details";
import { Resource, ResourceType } from "../types";
import "./Tabs.css";

interface Props {
  inputValue: string;
  resources: Resource[];
  selectedResourceType: ResourceType;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onResourceAddition: () => void;
  onResourceDeletion: (id: string) => void;
  onResourceTypeSelection: (resourceType: ResourceType) => void;
}

export const Tabs = ({
  inputValue,
  resources,
  selectedResourceType,
  onInputChange,
  onResourceAddition,
  onResourceDeletion,
  onResourceTypeSelection,
}: Props) => {
  const handleResourceTypeSelectionFactory =
    (resourceType: ResourceType) => () => {
      onResourceTypeSelection(resourceType);
    };

  return (
    <>
      <button
        className={getTabsButtonClassName({
          resourceType: "css",
          selectedResourceType,
        })}
        title="Select CSS tab"
        onClick={handleResourceTypeSelectionFactory("css")}
      >
        CSS
      </button>
      <button
        className={getTabsButtonClassName({
          resourceType: "js",
          selectedResourceType,
        })}
        title="Select JS tab"
        onClick={handleResourceTypeSelectionFactory("js")}
      >
        JS
      </button>
      <Tab
        details={details[selectedResourceType]}
        inputValue={inputValue}
        resources={resources}
        onInputChange={onInputChange}
        onResourceAddition={onResourceAddition}
        onResourceDeletion={onResourceDeletion}
      />
    </>
  );
};
