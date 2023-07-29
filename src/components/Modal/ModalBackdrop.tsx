import { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { Box } from "../../../styled-system/jsx";

interface ModalBackdropProps {
  openCloseHandler: MouseEventHandler<HTMLDivElement>;
  KeyDownCloseHandler: KeyboardEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const ModalBackdrop = ({
  openCloseHandler,
  KeyDownCloseHandler,
  children,
}: ModalBackdropProps) => {
  return (
    <Box
      className={css({
        bg: "rgba(0, 0, 0, 0.5)",
        w: "screen",
        h: "screen",
        position: "fixed",
      })}
      tabIndex={-1}
      onClick={openCloseHandler}
      onKeyDown={KeyDownCloseHandler}
    >
      {children}
    </Box>
  );
};

export default ModalBackdrop;
