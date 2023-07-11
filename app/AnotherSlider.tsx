import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  StackItem,
  Wrap,
  WrapItem,
  forwardRef,
} from "@chakra-ui/react";
import { motion, useDragControls, wrap } from "framer-motion";
import { Fragment, useRef, useState } from "react";

const AnotherSlider = () => {
  const ref = useRef(null);
  const dragControls = useDragControls();

  const [[page, direction], setPage] = useState([0, 0]);
  console.log(page, direction)
  
  // const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container as="article" minW="full" overflow="hidden">
      <HStack
        as={motion.section}
        drag="x"
        placeItems="center"
        dragConstraints={{ left: 0, right: 0 }}
        custom={direction}

      >
        {[...Array(10)].map((d, i) => (
          <Box
            key={i}
            as={motion.div}
            bg="tomato"
            minW="300px"
            minH="300px"
            color="gray.100"
            fontSize="6xl"
          >
            <Center>{i + 1}</Center>
          </Box>
        ))}
      </HStack>

      <Stack as="section" placeItems="center" minW="100%">
        <Wrap>
          <WrapItem>
            <IconButton
              aria-label="swipe left button"
              colorScheme="yellow"
              icon={<ArrowLeftIcon />}
              onClick={() => paginate(-1)}
            />
          </WrapItem>
          <WrapItem>
            <IconButton
              aria-label="swipe right button"
              colorScheme="yellow"
              icon={<ArrowRightIcon />}
              onClick={() => paginate(1)}
            />
          </WrapItem>
        </Wrap>
      </Stack>
    </Container>
  );
};

export default AnotherSlider;
