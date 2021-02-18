import * as React from "react";
import ReactDOM from "react-dom";
import { Modal } from "./Modal";

interface IModalPortal {
  readonly clickHandler: () => void;
  readonly children: React.ReactNode;
}
export const ModalPortal: React.SFC<IModalPortal> = ({
  clickHandler,
  children
}) => {
  const modalRoot = document.getElementById("modal-root") as Element;

  return ReactDOM.createPortal(
    <Modal clickHandler={clickHandler}> {children} </Modal>,
    modalRoot
  );
};
