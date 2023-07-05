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
  Stack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

import useMatchMedia from "@buildinams/use-match-media";

const Header = () => {
  // use the match media api to merge headers together when the screen is large

  // upper header (logo, user profile button)
  // bottom header (input with filter)

  // const isMobile = useMatchMedia("(max-width: 768px)", true);

  return (
    <Container minW="full" as="header" bg="green.300" paddingY={48}>
      <VisuallyHidden>
        <Heading as="h1" size="xs">
          Find Recipe
        </Heading>
      </VisuallyHidden>

      <HStack spacing={4} justifyContent='center'>
        {/* <List as="nav">
          <ListItem>
            <ChakraLink as={Link} href="/">
              <IconButton
                aria-label="return to Homepage"
                boxShadow="inner_BR"
                backgroundColor="yellow.400"
                color="red.800"
                icon={<BiFoodMenu />}
                variant="solid"
              />
            </ChakraLink>
          </ListItem>
        </List> */}

        <InputGroup variant="filled" width='container.sm'>
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
      </HStack>
    </Container>
  );
};

export default Header;
