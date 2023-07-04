"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { BiFilterAlt, BiFoodMenu } from "../ui/CustomIcons";

import {
  Flex,
  IconButton,
  Input,
  VisuallyHidden,
  StackDivider,
  ListItem,
  Link as ChakraLink,
  List,
  Spacer,
  Container,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  // use the match media api to merge headers together when the screen is large

  // upper header (logo, user profile button)
  // bottom header (input with filter)

  return (
    <VStack
      as="header"
      bg="green.300"
      divider={<StackDivider borderColor="gray.700" />}
      spacing={4}
      paddingY={4}
    >
      <Container>
        <Flex>
          <List as="nav">
            <ListItem>
              <ChakraLink as={Link} href="/">
                <IconButton
                  aria-label="return to Homepage"
                  boxShadow="inner_BR"
                  backgroundColor="yellow.400"
                  color="red.800"
                  icon={<BiFoodMenu />}

                  variant='solid'
                />
              </ChakraLink>
            </ListItem>
          </List>

          {/* <Spacer /> */}
        </Flex>
      </Container>

      <Container>
        <Flex>
          <VisuallyHidden>
            <Heading as="h1" size="xs" paddingX={2.5}>
              Find Recipe
            </Heading>
          </VisuallyHidden>

          <InputGroup variant="filled" >
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
        </Flex>
      </Container>
    </VStack>
  );
};

export default Header;
