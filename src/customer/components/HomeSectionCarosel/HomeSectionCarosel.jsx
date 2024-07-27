// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import type { EventObject } from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button, colors } from "@mui/material";
// import { mens_kurta } from "../../../Data/Men/men_kurta";
// const responsive = {
//   0: { items: 1 },
//   730: { items: 3 },
//   1024: { items: 5 },
// };

// let items = mens_kurta
//   .slice(0, 20)
//   .map((item) => <HomeSectionCard product={item} />);

// const HomeSectionCarosel = ({ data }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slidePrev = () => {
//     setActiveIndex((prevIndex) => prevIndex - 1);
//   };

//   const slideNext = () => {
//     setActiveIndex((prevIndex) => prevIndex + 1);
//   };

//   const syncActiveIndex = (e) => {
//     console.log(e);
//     setActiveIndex(e.item);
//     console.log(activeIndex, "the active index ");
//   };

//   return (
//     <>
//       <div className=" border ">
//         <div className="relative p-5">
//           <AliceCarousel
//             activeIndex={activeIndex}
//             items={items}
//             disableDotsControls
//             disableButtonsControls
//             responsive={responsive}
//             onSlideChanged={syncActiveIndex}
//           />
//           {activeIndex !== items.length - 0 && (
//             <Button
//               variant="contained"
//               onClick={slideNext}
//               className="z-50 bg-white"
//               sx={{
//                 position: "absolute",
//                 top: "8rem",
//                 right: "0rem",
//                 transform: "translateX(50%) rotate(90deg)",
//                 bgcolor: "white",
//               }}
//               aria-label="next"
//             >
//               <KeyboardArrowLeftIcon
//                 sx={{ transform: "rotate(90deg)", color: "black" }}
//               />
//             </Button>
//           )}
//           {activeIndex !== 0 && (
//             <Button
//               variant="contained"
//               onClick={slidePrev}
//               className="z-50 bg-white"
//               sx={{
//                 position: "absolute",
//                 top: "8rem",
//                 left: "0rem",
//                 transform: "translateX(-50%) rotate(-90deg)",
//                 bgcolor: "white",
//               }}
//               // color="white"
//               aria-label="next"
//             >
//               <KeyboardArrowLeftIcon
//                 sx={{ transform: "rotate(90deg)", color: "black" }}
//               />
//             </Button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeSectionCarosel;

import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const responsive = {
  0: { items: 1 },
  730: { items: 3 },
  1024: { items: 5 },
};

const HomeSectionCarousel = ({ data, section_name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      const carouselItems = data
        .slice(0, 20)
        .map((item) => <HomeSectionCard key={item.id} product={item} />);
      setItems(carouselItems);
    }
  }, [data]);

  const slidePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const syncActiveIndex = (e) => {
    console.log("the active index is ", activeIndex);
    setActiveIndex(e.item);
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-4">
        {section_name}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          activeIndex={activeIndex}
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            onClick={slideNext}
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
