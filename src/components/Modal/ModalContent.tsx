import { ReactNode } from "react";
import { VStack, VstackProps } from "../../../styled-system/jsx";
import { center } from "../../../styled-system/patterns";

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <VStack
      role="dialog"
      className={center({
        bg: "green.400",
        w: "full",
        h: "fit-content",
        p: "8",
        flexDirection: "column",
        gap: "5",
      })}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </VStack>
  );
};

export default ModalContent;
