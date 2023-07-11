import { HStack, StackItem, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface IBasedgeComponents {
  initial?: "initialLeft" | "initialRight";
  animate: "firstPosition" | "secondPosition" | "thirdPosition";
  hover: "hoverSides" | "hoverMiddle";
  handleClick?: () => void;
  children: ReactNode;
}

const BasedgeComponents = ({
  initial,
  animate,
  hover,
  handleClick,
  children,
}: IBasedgeComponents) => {
  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: -500,
        scale: 0.8,
      },
      initialRight: {
        x: 500,
        scale: 0.8,
      },
      firstPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
      secondPosition: {
        scale: 1,
        x: 0,
      },
      thirdPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
      hoverSides: {
        scale: 0.85,
      },
      hoverMiddle: {
        scale: 1,
      }, // this fixes it!
    }),
    []
  );

  // useEffect is needed for synchronization, what is there to synchronize, maybe I just need a handler.
  // useMemo I don't really need it on top of the array.
  // plus I don't need the focus in the center initially, maybe it will simplify and I won't need to think about the position, as they are all visually the same for me.
  // initial left, initial right, hover, position

  return (
    <VStack
      as={motion.div}
      variants={PositionVariants}
      initial={initial}
      animate={animate}
      exit={initial}
      whileHover={hover}
      layout
      className="cardWrapper"
      onClick={handleClick}
      style={{ gridArea: "A0" }}
    >
      <StackItem
        as={motion.div}
        layout
        w="300px"
        h="300px"
        bg="tomato"
        color="gray.700"
        fontSize="6xl"
        textAlign="center"
        justifyContent="center"
      >
        {children}
      </StackItem>
    </VStack>
  );
};

export default BasedgeComponents;
