import { IHit } from "../../types/recipes";
import {
  Image,
  useColorMode,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Heading,
  Link,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as routerLink } from "react-router-dom";

type CardItemProps = {
  item: IHit;
};

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const { colorMode } = useColorMode();

  const domain = new URL(item.recipe.url);

  return (
    <AnimatePresence>
      <Card
        as={motion.div}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        bg={colorMode === "light" ? "yellow.300" : "green.300"}
        maxW="sm"
      >
        <CardBody>
          <Link
            as={routerLink}
            to={`/recipes/${item.recipe.uri.split("#")[1]}`}
          >
            <VStack mt="6" spacing="3">
              <Image
                src={item.recipe.image}
                alt="recipe image"
                borderRadius="lg"
              />

              <Heading size="md">{item.recipe.label}</Heading>
            </VStack>
          </Link>
        </CardBody>

        <Divider borderColor={colorMode === "light" ? "gray.700" : "gray.50"} />

        <Stack
          direction={["column", null, null, null, null, "row"]}
          justify="space-evenly"
          placeItems="center"
          bg={colorMode === "light" ? "cyan.100" : "cyan.700"}
          minH="10"
          divider={
            <StackDivider
              borderColor={colorMode === "light" ? "gray.700" : "gray.50"}
            />
          }
        >
          <Link
            as={routerLink}
            to={`/recipes/${item.recipe.uri.split("#")[1]}`}
          >
            {Math.ceil(item.recipe.calories)} calories
          </Link>
          <Link
            as={routerLink}
            to={`/recipes/${item.recipe.uri.split("#")[1]}`}
          >
            {item.recipe.ingredients.length} ingredients
          </Link>
        </Stack>

        <Divider borderColor={colorMode === "light" ? "gray.700" : "gray.50"} />

        <CardFooter justify="space-evenly">
          <Link href={item.recipe.url} target="_blank">
            {domain.hostname.replace("www.", "")}
          </Link>
        </CardFooter>
      </Card>
    </AnimatePresence>
  );
};

export default CardItem;
