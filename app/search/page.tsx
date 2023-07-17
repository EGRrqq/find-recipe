"use client";

import { Container, Heading, VisuallyHidden } from "@chakra-ui/react";

export default function SearchDetails() {
  // simple grid with recipe cards

  return (
    <Container as="main" minW="full" p={4} bg="red.50">
      {/* <VisuallyHidden> */}
      <Heading as="h2" size="lg">
        Reccipe Details
      </Heading>
      {/* </VisuallyHidden> */}
    </Container>
  );
}
