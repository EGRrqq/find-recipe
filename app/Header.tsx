"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { BiFilterAlt, BiFoodMenu } from "../ui/CustomIcons";

import {
  IconButton,
  Input,
  VisuallyHidden,
  Link as ChakraLink,
  Container,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";

import useMatchMedia from "@buildinams/use-match-media";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  // use the match media api to merge headers together when the screen is large

  // upper header (logo, user profile button)
  // bottom header (input with filter)

  const isMobile = useMatchMedia("(max-width: 768px)", true);

  return (
    <Container
      minW="full"
      as="header"
      bg="green.300"
      paddingY={[32, 32, 36, 40, 44]}
    >
      <VisuallyHidden>
        <Heading as="h1" size="xs">
          Find Recipe
        </Heading>
      </VisuallyHidden>

      <HStack spacing={4} justifyContent="center">
        {/* <List as="nav">
          <ListItem>
            <ChakraLink as={Link} href="/">
              <IconButton
                aria-label="return to Homepage"
                boxShadow="inner_BR"
                backgroundColor="yellow.400"
                color="gray.700"
                icon={<BiFoodMenu />}
                variant="solid"
              />
            </ChakraLink>
          </ListItem>
        </List> */}

        <InputGroup variant="filled" width="container.sm" onClick={onOpen}>
          <InputLeftElement>
            <SearchIcon color="gray.700" />
          </InputLeftElement>

          <Input placeholder="find recipe" border={0} boxShadow="inner_BR" />

          <InputRightElement borderLeft="1px solid #718096">
            <IconButton
              color="gray.700"
              aria-label="search button"
              icon={<BiFilterAlt />}
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>

        {isMobile && (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            initialFocusRef={initialRef}
            isCentered
          >
            <ModalOverlay />

            <ModalContent background="red.50">
              <HStack alignItems="baseline" justifyContent="space-between">
                <ModalCloseButton position="static" marginLeft={7} />
                <ModalHeader minW="fit-content">Find Recipe</ModalHeader>

                <Box
                  w={8}
                  h={8}
                  alignSelf="center"
                  marginRight={7}
                  overflow="hidden"
                  aria-hidden
                ></Box>
              </HStack>

              <Divider colorScheme="gray" borderColor="gray.700" />

              <ModalBody>
                <InputGroup
                  variant="outline"
                  size="lg"
                  key={() => console.log("yooo")}
                >
                  <InputLeftElement>
                    <SearchIcon color="gray.700" />
                  </InputLeftElement>

                  <Input placeholder="find recipe" ref={initialRef} />
                </InputGroup>
              </ModalBody>

              <Divider colorScheme="gray" borderColor="gray.700" />

              <ModalFooter justifyContent="space-between">
                <Button variant="ghost">Secondary Action</Button>
                <Button
                  colorScheme="yellow"
                  boxShadow="inner_BR"
                  backgroundColor="yellow.400"
                  color="gray.700"
                  variant="solid"
                >
                  Search
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </HStack>
    </Container>
  );
};

export default Header;
