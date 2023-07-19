"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import ImageSliderCopy from "./ImageSliderCopy";

interface IImageGallery {
  direction: "column" | "row";
}

const ImageGallery = ({ direction }: IImageGallery) => {
  return (
    <Stack bg="cyan.400" direction={direction} p={0}>
      <Stack
        as="section"
        color="gray.700"
        p={8}
        justifyContent="center"
        spacing={8}
      >
        <Heading as="h3" size="lg">
          Explore by Main Ingredient
        </Heading>

        <Text>
          Whether it’s delicious vegetarian or easy vegan recipes you’re after,
          or ideas for gluten or dairy-free dishes, you’ll find plenty here to
          inspire you.
        </Text>

        <Button
          colorScheme="yellow"
          boxShadow="inner_BR"
          backgroundColor="yellow.400"
          color="gray.700"
          variant="solid"
          width="3xs"
        >
          view all
        </Button>
      </Stack>

      <ImageSliderCopy />
    </Stack>
  );
};

export default ImageGallery;
