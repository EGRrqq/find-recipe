"use client";

import {
  VisuallyHidden,
  Container,
  Heading,
  Input,
  Wrap,
  WrapItem,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  Divider,
  Button,
} from "@chakra-ui/react";

import ImageSlider from "./ImageSlider";
import { useForm } from "react-hook-form";
import { useRecipe } from "@/store";
import { shallow } from "zustand/shallow";
import { useStore } from "@/hooks";

export default function HomePage() {
  // blocks with recipes filtered by category
  // _____
  // each block has
  // description
  // view button () => go to filtered by category search page
  // image gallery

  //  ______________________________________________________________

  //   <article>
  //     <h2>view recipes split by groups </h2>

  //     <section>
  //       <h3>Pass the Bread</h3>
  //       <p>Rolls, baguettes, boules, sandwich loaves, and more</p>
  //     </section>

  //     <section>
  //       <h3>recipe image slider</h3>

  //       <article>
  //         <h4>recipe images</h4>
  //         <section>
  //           <img alt="image filler" />
  //           <img alt="image filler" />
  //         </section>
  //       </article>

  //       <article>
  //         <h4>image slider navigation</h4>
  //         <section>
  //           <div>meter</div>
  //           <button>left arrow</button>
  //           <button>right arrow</button>
  //         </section>
  //       </article>
  //     </section>

  //   </article>;

  //  ______________________________________________________________

  const bear = useStore(useRecipe, (state) => state);

  // const [recipes, loading] = useRecipe(
  //   (state) => [state.recipes, state.loading],
  //   shallow
  // );

  return (
    <Container as="main" minW="full" p={4} bg="red.50">
      {/* <VisuallyHidden> */}
      <Heading as="h2" size="lg">
        View Recipes
      </Heading>
      {/* </VisuallyHidden> */}

      <Divider colorScheme="gray" borderColor="gray.700" />

      {/* {error && (
          <>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>AAAAAAAAAAAAAA</AlertTitle>
              <AlertDescription>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </AlertDescription>
            </Alert>
          </>
        )} */}

      {bear?.loading && (
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

      {bear?.recipes && (
        <Wrap>
          {bear?.recipes.hits.map((el) => (
            <WrapItem key={el._links.self.href}>
              <Heading as="h3" size="md">
                {el.recipe.label}
              </Heading>
            </WrapItem>
          ))}
        </Wrap>
      )}

      {/* <ImageSlider />  */}
    </Container>
  );
}
