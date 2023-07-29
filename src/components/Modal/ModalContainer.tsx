import { ReactNode } from "react";
import { Container, ContainerProps } from "../../../styled-system/jsx";

interface ModalContainerProps extends ContainerProps {
  children: ReactNode;
}

const ModalContainer = (props: ModalContainerProps) => {
  const { children } = props;

  return (
    <Container
      w={"full"}
      h={"full"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      zIndex={"modal"}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ModalContainer;
