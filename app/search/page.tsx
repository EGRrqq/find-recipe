"use client";

import {
  Container,
  Heading,
  VisuallyHidden,
  Wrap,
  WrapItem,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  SimpleGrid,
  Divider,
  Select,
  Box,
} from "@chakra-ui/react";

import { usePath, useRecipe } from "@/store";
import RecipeCard from "../RecipeCard";
import { dishType } from "@/constants";
import { shallow } from "zustand/shallow";
import { useStore } from "@/hooks";

export default function SearchDetails() {
  const recipes = useStore(useRecipe, (state) => state.recipes);
  const loading = useStore(useRecipe, (state) => state.loading);

  const setDishType = usePath((state) => state.setDishType);
  const path = usePath((state) => state.path);

  const getRecipesBySearch = useRecipe((state) => state.getRecipesBySearch);

  console.log(recipes);

  // simple grid with recipe cards

  return (
    <Container as="main" minW="full" p={16} bg="red.50" padding={8}>
      <VisuallyHidden>
        <Heading as="h2" size="lg">
          Recipe Details
        </Heading>
      </VisuallyHidden>

      <Box pb={8}>
        <Select
          placeholder="Select dish"
          bg="tomato"
          onChange={(e) => (
            setDishType(`&dishType=${e.target.value}`),
            getRecipesBySearch(Object.values(path).join(""))
          )}
        >
          {dishType.map((dish) => (
            <option key={dish} value={dish}>
              {dish}
            </option>
          ))}
        </Select>
      </Box>

      {loading && (
        <>
          <Alert status="loading">
            <AlertIcon />
            <AlertTitle>AAAAAAAAAAAAAA</AlertTitle>
            <AlertDescription>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </AlertDescription>
          </Alert>
        </>
      )}

      <SimpleGrid
        columns={[1, null, null, 2, null, 3, null, null, 4, null, 5, 6, 7]}
        spacing={[
          8,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          16,
        ]}
        placeItems="center"
        overflow="hidden"
      >
        {recipes?.hits.map((el) => (
          <RecipeCard
            src={el.recipe.image}
            key={el.recipe.image}
            recipeName={el.recipe.label}
            recipeUrl={el.recipe.url}
            recipeUrlName={el.recipe.source}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
