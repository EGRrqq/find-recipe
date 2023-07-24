"use client";

import useMatchMedia from "@buildinams/use-match-media";
import ImageSlider from "./ImageSlider";

import {
  Input,
  VisuallyHidden,
  Container,
  InputGroup,
  InputLeftElement,
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { usePath, useRecipe } from "@/store";
import { shallow } from "zustand/shallow";
import { BiFilterAlt } from "@/ui/CustomIcons";

// opening a modal window when the user clicks on the input button
// width="full", rectangle with autocomplete

{
  /* <datalist>
  <option></option>
</datalist>; */
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMatchMedia("(max-width: 768px)", false);

  const getRecipesBySearch = useRecipe((state) => state.getRecipesBySearch);
  const setQuery = usePath((state) => state.setQuery);
  const path = usePath((state) => state.path);

  const router = useRouter();
  const pathname = usePathname();

  console.log("path", path);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      searchRecipe: "",
    },
  });

  const handleSearch = () => {
    handleSubmit((data) => getRecipesBySearch(data.searchRecipe))();
    onClose();
  };

  return (
    <Container
      maxW="100%"
      as="header"
      bg="green.300"
      paddingY={[null, 32, 36, 40, 44]}
    >
      <VisuallyHidden>
        <Heading as="h1" size="xs">
          Find Recipe
        </Heading>
      </VisuallyHidden>

      <HStack as="nav" spacing={4} justifyContent="center">
        <Box
          as="form"
          width="container.lg"
          onSubmit={handleSubmit(
            // compose
            
            (data) => setQuery(`&q=${data.searchRecipe}`),
            getRecipesBySearch(Object.values(path).join("")),
            // () => router.push('/search'),
          )}
        >
          <FormControl isInvalid={errors.searchRecipe}>
            <FormLabel htmlFor="searchRecipe">Find Recipe</FormLabel>

            {/* onClick={onOpen} -> rerender cause */}
            
            <InputGroup variant="filled" onClick={onOpen} size="lg">
              <InputLeftElement>
                <SearchIcon color="gray.700" />
              </InputLeftElement>

              <Input
                id="searchRecipe"
                type="search"
                placeholder="find recipe"
                {...register("searchRecipe", {
                  // required: "This is required",
                })}
              />

              {pathname !== "/" && (
                <>
                  <InputRightElement borderLeft="1px solid #718096">
                    <IconButton
                      color="gray.700"
                      aria-label="search button"
                      icon={<BiFilterAlt />}
                      variant="ghost"
                    />
                  </InputRightElement>
                </>
              )}
            </InputGroup>

            <FormErrorMessage>
              {errors.searchRecipe && errors.searchRecipe.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        {isMobile && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
                <Box
                  as="form"
                  onSubmit={handleSubmit(
                    (data) => (data) => setQuery(`&q=${data.searchRecipe}`),
                    getRecipesBySearch(Object.values(path).join(""))
                  )}
                >
                  <FormControl isInvalid={errors.searchRecipe}>
                    <FormLabel htmlFor="searchRecipe">Find Recipe</FormLabel>

                    <InputGroup variant="outline" onClick={onOpen} size="lg">
                      <InputLeftElement>
                        <SearchIcon color="gray.700" />
                      </InputLeftElement>

                      <Input
                        id="searchRecipe"
                        type="search"
                        autoFocus
                        placeholder="find recipe"
                        {...register("searchRecipe", {
                          // required: "This is required",
                        })}
                      />
                    </InputGroup>

                    <FormErrorMessage>
                      {errors.searchRecipe && errors.searchRecipe.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>

                <ImageSlider />
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
                  onClick={handleSearch}
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
