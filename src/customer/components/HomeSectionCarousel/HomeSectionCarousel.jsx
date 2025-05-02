import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const item = [
    <HomeSectionCard key={1} />,
    <HomeSectionCard key={2} />,
    <HomeSectionCard key={3} />,
    <HomeSectionCard key={4} />,
    <HomeSectionCard key={5} />,
    <HomeSectionCard key={6} />,
    <HomeSectionCard key={7} />,
    <HomeSectionCard key={8} />,
    <HomeSectionCard key={9} />,
    <HomeSectionCard key={10} />,
    <HomeSectionCard key={11} />,
    <HomeSectionCard key={12} />,
    <HomeSectionCard key={13} />,
    <HomeSectionCard key={14} />,
    <HomeSectionCard key={15} />,
  ];

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={item}
          responsive={responsive}
          ref={carouselRef} // ✅ attach the ref
        />

        {/* Left Button */}
        <Button
          variant="contained"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            zIndex: 10,
            bgcolor: "white",
            minWidth: "40px",
          }}
        >
          <KeyboardArrowLeftIcon sx={{ color: "black" }} />
        </Button>

        {/* Right Button */}
        <Button
          variant="contained"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%) rotate(180deg)",
            zIndex: 10,
            bgcolor: "white",
            minWidth: "40px",
          }}
        >
          <KeyboardArrowLeftIcon sx={{ color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
