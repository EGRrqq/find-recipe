"use client";

import ModalContainer from "@/components/Modal/ModalContainer";
import { Container } from "../../styled-system/jsx";
import { Input, Modal } from "@/components";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { KeyboardEventHandler, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseHandler = () => setIsOpen(!isOpen);
  const KeyDownCloseHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") openCloseHandler();
  };

  return (
    <Container px={0} minW={"screen"}>
      {isOpen ? (
        <Modal
          openCloseHandler={openCloseHandler}
          KeyDownCloseHandler={KeyDownCloseHandler}
        >
          <VisuallyHidden>
            <h1>Find Recipe</h1>
          </VisuallyHidden>
          <Input size="sm" />
        </Modal>
      ) : (
        <ModalContainer onClick={openCloseHandler}>
          <VisuallyHidden>
            <h1>Find Recipe</h1>
          </VisuallyHidden>

          <Input size="sm" visual="outline" />
        </ModalContainer>
      )}
    </Container>
  );
};

export default Header;
