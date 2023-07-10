"use client";

import {
  VisuallyHidden,
  Container,
  Heading,
  Box,
  BoxProps,
  Center,
  Stack,
  HStack,
  Flex,
  Image,
  Input,
} from "@chakra-ui/react";
import { AnimatePresence, Variants, motion, wrap } from "framer-motion";
import { useState } from "react";
import TestSlider from "./TestSlider";
import ImageSlider from "./ImageSlider";

// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//   return Math.abs(offset) * velocity;
// };

export default function SearchDetails() {
  // blocks with recipes filtered by category
  // _____
  // each block has
  // description
  // view button () => go to filtered by category search page
  // image gallery

  // const [[page, direction], setPage] = useState([0, 0]);

  // const imageIndex = wrap(0, images.length, page);

  // const paginate = (newDirection: number) => {
  //   setPage([page + newDirection, newDirection]);
  // };

  return (
    <Container as="main" minW="full" p={4}>
      <VisuallyHidden>
        <Heading as="h2" size="lg">
          View Recipes
        </Heading>
      </VisuallyHidden>

      {/* <AnimatePresence initial={false} custom={direction}>
        <Image
          as={motion.img}
          alt="random stuff"
          sx={{ position: "absolute" }}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence> */}

      <TestSlider />

      <ImageSlider />
    </Container>
  );
}
