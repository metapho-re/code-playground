import { RefObject } from "react";
import "./Dialog.css";

interface Props {
  dialogRef: RefObject<HTMLDialogElement>;
}

export const Dialog = ({ dialogRef }: Props) => {
  const handleDialogClose = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef}>
      <button onClick={handleDialogClose}>Close</button>
    </dialog>
  );
};
