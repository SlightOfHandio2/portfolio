import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktopWeird: {
    breakpoint: { max: 3000, min: 2250 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2250, min: 1600 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1600, min: 1000 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
};

interface Props {
  children: any;
}

const RoundAbout = (props: Props) => {
  return (
    <Carousel responsive={responsive} infinite={true} partialVisible={false}>
      {props.children}
    </Carousel>
  );
};

export default RoundAbout;
