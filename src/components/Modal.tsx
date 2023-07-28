"use client";

import { ReactNode, useState, KeyboardEventHandler } from "react";
import { Box, Container, Flex, VStack } from "../../styled-system/jsx";
import { center } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

interface ModalProps {
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => setIsOpen(!isOpen);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") openHandler();
  };

  return (
    <Container
      w={"full"}
      h={"full"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        onClick={openHandler}
        w={"full"}
        h={"full"}
        position={"relative"}
        className={center({ flexDirection: "column", gap: "5" })}
      >
        {children}
      </Box>

      {isOpen && (
        <Box
          className={css({
            bg: "rgba(0, 0, 0, 0.5)",
            w: "screen",
            h: "screen",
            position: "fixed",
          })}
          tabIndex={-1}
          onClick={openHandler}
          onKeyDown={handleKeyDown}
        >
          <VStack
            role="dialog"
            className={center({
              bg: "gray.100",
              w: "screen",
              h: "fit-content",
              p: "8",
            })}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {children}

            <button aria-label="close modal button" onClick={openHandler}>
              &times;
            </button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Modal;
