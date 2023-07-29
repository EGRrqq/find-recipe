import { Button, Input, Modal } from "@/components";
import { Box, Container, Stack } from "../../styled-system/jsx";
import { circle } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";

export default function Home() {
  return (
    <Container px={0} minW={"screen"}>
      <Modal>
        <VisuallyHidden>
          <h1>Find Recipe</h1>
        </VisuallyHidden>
        <Input size="sm" visual="outline" />
      </Modal>
    </Container>
  );
}
