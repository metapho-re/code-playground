import { ResourceType } from "./types";

interface Props {
  resourceType: ResourceType;
  selectedResourceType: ResourceType;
}

export const getTabsButtonClassName = ({
  resourceType,
  selectedResourceType,
}: Props): string => (resourceType === selectedResourceType ? "selected" : "");
