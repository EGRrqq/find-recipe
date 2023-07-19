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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useRecipe } from "@/store";

// opening a modal window when the user clicks on the input button
// width="full", rectangle with autocomplete

{
  /* <datalist>
  <option></option>
</datalist>; */
}

const HeaderSecond = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMatchMedia("(max-width: 768px)", false);
  const router = useRouter();
  const getRecipesBySearch = useRecipe((state) => state.getRecipesBySearch);

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
          onSubmit={handleSubmit((data) =>
            getRecipesBySearch(data.searchRecipe)
          )}
        >
          <FormControl isInvalid={errors.searchRecipe}>
            <FormLabel htmlFor="searchRecipe">Find Recipe</FormLabel>

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
                  onSubmit={handleSubmit((data) =>
                    getRecipesBySearch(data.searchRecipe)
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

export default HeaderSecond;
