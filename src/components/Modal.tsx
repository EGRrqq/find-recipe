"use client";

import { ReactNode, useState, KeyboardEventHandler } from "react";
import { Box, VstackProps } from "../../styled-system/jsx";
import { CenterOptions, center } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { poly } from "@/utils";

interface ModalProps {
  children: ReactNode;
}

const Container = poly("article");
const VStack = poly("section");

const bodyStyle: CenterOptions | undefined = {
  bg: "green.400",
  w: "full",
  h: "fit-content",
  p: "8",
  flexDirection: "column",
  gap: "5",
};

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
      {isOpen ? (
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
            className={center(bodyStyle)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {children}

            <button aria-label="close modal button" onClick={openHandler}>
              &times;
            </button>
          </VStack>
        </Box>
      ) : (
        <VStack onClick={openHandler} className={center(bodyStyle)}>
          {children}
        </VStack>
      )}
    </Container>
  );
};

export default Modal;
