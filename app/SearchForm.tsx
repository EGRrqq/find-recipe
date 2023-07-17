"use client";

import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormErrorMessage,
  HStack,
  Box,
  FormLabel,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useRecipe } from "@/store";

interface ISearchForm {
  onOpen?: () => void;
  inputVariant: "filled" | "outline";
  formWidth?: "container.lg";
}

const SearchForm = ({ onOpen, inputVariant, formWidth }: ISearchForm) => {
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

  // need to make the shadow shrink when enter is pressed

  return (
    <Box
      as="form"
      width={formWidth}
      onSubmit={handleSubmit((data) => getRecipesBySearch(data.searchRecipe))}
    >
      <FormControl isInvalid={errors.searchRecipe}>
        <FormLabel htmlFor="searchRecipe">Find Recipe</FormLabel>

        <InputGroup variant={inputVariant} onClick={onOpen} size="lg">
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
  );
};

export default SearchForm;
