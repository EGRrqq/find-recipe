"use client";

import { ReactNode, useState, KeyboardEventHandler } from "react";
import { Box, Container, VStack } from "../../styled-system/jsx";
import { center } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

interface ModalProps {
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen", isOpen);

  const openHandler = () => setIsOpen(!isOpen);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") openHandler();
  };

  return (
    <Container
      border="1px solid tomato"
      borderRadius={"8px"}
      p={4}
      w={"screen"}
      h={"screen"}
      position={"relative"}
      className={center({ flexDirection: "column", gap: "5" })}
    >
      <Box onClick={openHandler}>
        {children}
      </Box>

      {isOpen && (
        <Box
          className={center({
            bg: "gray.100",
            w: "full",
            h: "full",
            position: "fixed",
          })}
          bg="rgba(0, 0, 0, 0.5)"
          onClick={openHandler}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <VStack
            role="dialog"
            className={center({
              bg: "gray.100",
              w: "1/2",
              h: "1/2",
            })}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {children}
            <button
              aria-label="close modal button"
              onClick={openHandler}
            >
              &times;
            </button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Modal;
