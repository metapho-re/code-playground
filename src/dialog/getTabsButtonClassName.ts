import { ResourceType } from "../types";

interface Props {
  resourceType: ResourceType;
  selectedResourceType: ResourceType;
}

export const getTabsButtonClassName = ({
  resourceType,
  selectedResourceType,
}: Props): string =>
  `tabs__button${
    resourceType === selectedResourceType ? " tabs__button_selected" : ""
  }`;
