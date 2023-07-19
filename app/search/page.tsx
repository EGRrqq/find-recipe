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
} from "@chakra-ui/react";

import { useRecipe } from "@/store";
import { useStore } from "@/hooks";
import RecipeCard from "../RecipeCard";

export default function SearchDetails() {
  const data = useStore(useRecipe, (state) => state);
  console.log(data);

  // simple grid with recipe cards

  return (
    <Container as="main" minW="full" p={16} bg="red.50" padding={8}>
      <VisuallyHidden>
        <Heading as="h2" size="lg">
          Recipe Details
        </Heading>
      </VisuallyHidden>

      {data?.loading && (
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
        {data?.recipes.hits.map((el) => (
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
