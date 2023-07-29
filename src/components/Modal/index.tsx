import { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import ModalBackdrop from "./ModalBackdrop";
import ModalContainer from "./ModalContainer";
import ModalContent from "./ModalContent";

interface ModalProps {
  openCloseHandler: MouseEventHandler<HTMLDivElement>;
  KeyDownCloseHandler: KeyboardEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const Modal = ({ openCloseHandler, KeyDownCloseHandler, children }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalBackdrop openCloseHandler={openCloseHandler} KeyDownCloseHandler={KeyDownCloseHandler}>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default Modal;
