import React, { useRef, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsInView, setItemsInView] = useState(1);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  // Dynamically calculate itemsInView based on window width
  const calculateItemsInView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsInView(responsive[1024].items);
    } else if (width >= 720) {
      setItemsInView(responsive[720].items);
    } else {
      setItemsInView(responsive[0].items);
    }
  };

  useEffect(() => {
    calculateItemsInView();
    window.addEventListener("resize", calculateItemsInView);
    return () => window.removeEventListener("resize", calculateItemsInView);
  }, []);

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

  const carouselItems = items.map((product, index) => (
    <HomeSectionCard
      key={index}
      title={product.title}
      description={product.description}
      image={product.image}
    />
  ));

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={carouselItems}
          responsive={responsive}
          ref={carouselRef}
          onSlideChanged={(e) => setActiveIndex(e.item)}
        />

        {/* Left Button */}
        {activeIndex > 0 && (
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
        )}

        {/* Right Button */}
        {activeIndex < items.length - itemsInView && (
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
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
