import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./MainCarosel.css";
import { mainCaroselData } from "./mainCaroselData";

const MainCarosel = () => {
  const items = mainCaroselData.sample.map((item) => (
    <img
      className="cursor-pointer"
      src={item.url}
      role="presentation"
      alt={item.description}
    />
  ));

  return (
    <AliceCarousel
      className="extra_carosel"
      mouseTracking
      autoPlay
      disableButtonsControls
      autoPlayInterval={3000} // Adjust to slow down auto play interval
      animationDuration={1000}
      items={items}
      controlsStrategy="alternate"
      infinite
    />
  );
};

export default MainCarosel;
