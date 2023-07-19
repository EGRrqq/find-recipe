"use client";

import {
  VisuallyHidden,
  Container,
  Heading,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";

import ImageSlider from "./ImageSlider";
import ImageGallery from "./ImageGallery";
import useMatchMedia from "@buildinams/use-match-media";

import { dishType } from "@/constants"; 

export default function HomePage() {
  const isMobile = useMatchMedia("(max-width: 768px)", false);

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
      <VisuallyHidden>
        <Heading as="h2" size="lg">
          View Recipes
        </Heading>
      </VisuallyHidden>

      {/* {dishType.map((dishType) => (
        <ImageGallery dishType={dishType} key={dishType} />
      ))} */}

      <ImageSlider />

      {isMobile ? (
        <ImageGallery direction="column" />
      ) : (
        <ImageGallery direction="row" />
      )}

    </Container>
  );
}
