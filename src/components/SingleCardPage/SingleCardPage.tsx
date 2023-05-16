import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../../store/features/recipesService";
import { AnimatePresence, motion } from "framer-motion";
import Fallback from "../Fallback";

const SingleCardPage: React.FC = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();

  const {
    data: card,
    isLoading,
    error: cardError,
    isError,
  } = useGetSingleRecipeQuery(String(id));

  return (
    <>
      {isError && (
        <Center>
          <Alert status="error">
            <AlertIcon />
            {cardError.error}
          </Alert>
        </Center>
      )}

      <VStack align="stretch" px="16">
        <AnimatePresence>
          <Card
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            {isLoading ? (
              <Fallback />
            ) : (
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={card?.recipe.image}
                alt="recipe image"
              />
            )}

            <Stack>
              <CardBody>
                <Heading size="md">{card?.recipe.label}</Heading>

                <Text py="2">
                  See full recipe on:{" "}
                  <Link
                    href={card?.recipe.url}
                    color={colorMode === "light" ? "green.500" : "teal.200"}
                    isExternal
                  >
                    {card?.recipe.source}{" "}
                  </Link>
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="teal">
                  Save
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </AnimatePresence>
      </VStack>
    </>
  );
};

export default SingleCardPage;
