"use client";

import {
  Container,
  Heading,
  Flex,
  VStack,
  Text,
  HStack,
  Tag,
  Button,
  Box,
  Center,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import ChakraCarousel from "@/ui/ChakraCarousel";
import { capsFirst } from "@/utils";
import RecipeCard from "./RecipeCard";
import Image from "next/image";

import { dishType } from "@/constants"; 

const ImageSliderCopy = () => {
  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        "2xl": "87.5rem",
      }}
    >
      <ChakraCarousel gap={0}>
        {dishType.map((dish) => (
          // <VStack key={dish}>
          //   <Box w={"300px"} h={"300px"} bg="purple.600"></Box>

          //   <Heading as="h3" color="gray.200">
          //     {dish}
          //   </Heading>
          // </VStack>
          <Card
            key={dish}
            maxW="fit-content"
            w="full"
            h="full"
            bg="yellow.400"
            boxShadow="inner_BR"
            color="gray.700"
          >
            <CardHeader minW="300px">
              <Center>
                {/* <Image
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
                /> */}
                <Box w={"300px"} h={"300px"} bg="purple.600"></Box>
              </Center>
            </CardHeader>

            <CardBody>
              <Stack spacing="3">
                <Heading size="md" textAlign="center">
                  {dish}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </ChakraCarousel>
    </Container>
  );
};

export default ImageSliderCopy;
