import { useState, useEffect, useMemo } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import BasedgeComponents from "./BasedgeComponents";

export default function Carousel() {
  const carouselList = useMemo(() => [1, 2, 3, 4, 5, 6], []);

  const [displayed, setDisplayed] = useState(3);
  const [displayedElements, setDisplayedElements] = useState(undefined);

  console.log(displayed);

  useEffect(() => {
    let carouselListElements = carouselList.map((el, index) => {
      if (
        index + 1 === displayed ||
        (displayed === 0 && index === carouselList.length - 1)
      ) {
        return {
          position: 0,
          element: (
            <BasedgeComponents
              key={index}
              handleClick={() => {
                setDisplayed(index);
              }}
              initial="initialLeft"
              animate="firstPosition"
              hover="hoverSides"
            >
              {index + 1}
            </BasedgeComponents>
          ),
        };
      } else if (index === displayed) {
        console.log("rerendered!");
        return {
          position: 1,
          element: (
            <BasedgeComponents
              key={index}
              animate="secondPosition"
              hover="hoverMiddle"
            >
              {index + 1}
            </BasedgeComponents>
          ),
        };
      } else if (
        index - 1 === displayed ||
        (displayed === carouselList.length - 1 && index === 0)
      ) {
        return {
          position: 2,
          element: (
            <BasedgeComponents
              key={index}
              handleClick={() => {
                setDisplayed(index);
              }}
              initial="initialRight"
              animate="thirdPosition"
              hover="hoverSides"
            >
              {index + 1}
            </BasedgeComponents>
          ),
        };
      } else {
        return undefined;
      }
    });

    carouselListElements = carouselListElements.filter((el) =>
      el !== undefined ? true : false
    );

    setDisplayedElements(carouselListElements);
  }, [displayed, carouselList]);

  return (
    <>
      {/* <AnimateSharedLayout> */}

      {displayedElements !== undefined && (
        <AnimatePresence initial={false}>
          {displayedElements.filter((el) => el.position === 0)[0].element}
          {displayedElements.filter((el) => el.position === 1)[0].element}
          {displayedElements.filter((el) => el.position === 2)[0].element}
        </AnimatePresence>
      )}
      {/* </AnimateSharedLayout> */}
    </>
  );
}
