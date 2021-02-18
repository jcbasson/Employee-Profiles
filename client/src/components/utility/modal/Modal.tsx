import * as React from "react";
import { Overlay, ModalBox, ModalCloseButton } from "./styled";

interface IModal {
  clickHandler: () => void;
}

export const Modal: React.FC<IModal> = ({ clickHandler, children }) => {
  return (
    <Overlay onClick={clickHandler}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <ModalCloseButton onClick={clickHandler}>X</ModalCloseButton>
        {children}
      </ModalBox>
    </Overlay>
  );
};
