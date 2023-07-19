"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

interface IRecipeCard {
  src: string;
  recipeName: string;
  recipeUrl: string;
  recipeUrlName: string;
}

const RecipeCard = ({
  src,
  recipeName,
  recipeUrl,
  recipeUrlName,
}: IRecipeCard) => {
  // todo on hover

  return (
    <Card
      maxW="sm"
      w="full"
      h="full"
      bg="yellow.400"
      boxShadow="inner_BR"
      color="gray.700"
    >
      <CardHeader minW="300px">
        <Center>
          <Image
            alt="yummy recipe image"
            src={src}
            height={300}
            width={300}
            style={{
              boxShadow: "0px 0px 80px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Center>
      </CardHeader>

      <CardBody>
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            {recipeName}
          </Heading>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter justifyContent="center">
        <Text>
          <Link href={recipeUrl} isExternal color="gray.700">
            {recipeUrlName}
          </Link>
        </Text>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
