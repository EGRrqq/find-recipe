import { Container, Stack } from "../../styled-system/jsx";
import { circle } from "../../styled-system/patterns";

export default function Home() {
  return (
    <Container px={0} minW={"screen"}>
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
