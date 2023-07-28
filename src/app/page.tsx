import { Button, Input, Modal } from "@/components";
import { Container, Stack } from "../../styled-system/jsx";
import { circle } from "../../styled-system/patterns";

export default function Home() {
  return (
    <Container>
      <Modal>
        <Input size="sm" visual="outline" />
      </Modal>

      <Stack>
        <span
          className={circle({
            boxShadow: "inset -24px -28px 64px #718096",
            size: "96",
            bg: "red.300",
            animation: "bounce",
          })}
        />
        <span
          className={circle({
            boxShadow: "inset -24px -28px 64px #718096",
            size: "96",
            bg: "fuchsia.300",
            animation: "spin",
          })}
        />
      </Stack>
    </Container>
  );
}
