"use client";

import Slider, { Settings } from "react-slick";
import { imageData } from "./ImageData";
import {
  Box,
  Container,
  HStack,
  Img,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const setting: Settings = {
  className: "center",
  focusOnSelect: true,
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 4,
  speed: 500,
  adaptiveHeight: true,
  swipeToSlide: true,
  // afterChange: function(index) {
  //   console.log(
  //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //   );
  // },
  responsive: [
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 3,

        infinite: true,
      },
    },
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,

        infinite: true,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        centerPadding: "60px",

        infinite: true,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,

        infinite: true,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,

        centerPadding: "8px",

        infinite: true,
      },
    },
  ],
};

// useBreakpointValue

// chakra factory, сreate a component from a slider
// Wrap
// WrapItem

const ImageSlider = () => {
  return (
    <Stack as="article" marginY={8} bg="red.400" overflow="hidden">
      <Slider {...setting}>
        {imageData.map((data) => (
          <Box key={data.image} as="section" overflow="hidden">
            <Img
              src={data.image}
              alt={data.label}
              boxSize={["200px", "200px", "300px"]}
            />
          </Box>
        ))}

        {/* {ImageData.map((data) => (
        <Wrap key={data.image}>
          <WrapItem>
            <Image src={data.image} alt={data.label} />
          </WrapItem>
        </Wrap>
      ))} */}
      </Slider>

    </Stack>
  );
};

export default ImageSlider;
