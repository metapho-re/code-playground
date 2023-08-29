import { Resource } from "../types";
import "./List.css";

interface Props {
  resources: Resource[];
  onResourceDeletion: (id: string) => void;
}

export const List = ({ resources, onResourceDeletion }: Props) => {
  const handleResourceDeletionFactory = (id: string) => () => {
    onResourceDeletion(id);
  };

  return (
    <div className="list">
      <div className="list-scrollable-content">
        {resources.map(({ id, url }, index) => (
          <div key={id} className="list-item">
            <p className="list-item__text">
              {index + 1}. {url}
            </p>
            <button
              className="list-item__button"
              title="Delete dependency"
              onClick={handleResourceDeletionFactory(id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
