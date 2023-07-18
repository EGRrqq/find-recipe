"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image as ChakraImage,
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
  return (
    <Card maxW="sm" bg="yellow.400" boxShadow="inner_BR" color="gray.700">
      <CardHeader minW="300px">
        <Center>
          <Image
            alt="w"
            src={src}
            height={300}
            width={300}
            style={{
              borderRadius: "8px",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Center>

        {/* <Center>
          <ChakraImage
            src={src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="full"
          />
        </Center> */}
      </CardHeader>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="center">
            {recipeName}
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <Text py="2">
          See full recipe on:{" "}
          <Link href={recipeUrl} isExternal>
            {recipeUrlName}
          </Link>
        </Text>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
