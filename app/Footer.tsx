"use client";

import { Center, Container, VStack, Wrap, WrapItem } from "@chakra-ui/react";

const Footer = () => {
  // github contibure link

  return (
    <Container as="footer" minW="full" bg="purple.200">
      <VStack p={4}>
        <Wrap>
          <WrapItem>Footer</WrapItem>
        </Wrap>
      </VStack>
    </Container>
  );
};

export default Footer;
