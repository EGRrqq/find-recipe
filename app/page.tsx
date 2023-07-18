"use client";

import {
  VisuallyHidden,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";

import ImageSlider from "./ImageSlider";


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

  return (
    <Container as="main" minW="full" p={4} bg="red.50">
      {/* <VisuallyHidden> */}
      <Heading as="h2" size="lg">
        View Recipes
      </Heading>
      {/* </VisuallyHidden> */}

      <Divider colorScheme="gray" borderColor="gray.700" />

      <ImageSlider /> 
      <ImageSlider /> 
      <ImageSlider /> 
    </Container>
  );
}
