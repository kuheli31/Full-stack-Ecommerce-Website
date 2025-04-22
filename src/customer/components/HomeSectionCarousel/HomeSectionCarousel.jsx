import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainCarousel.css';

const HomeSectionCarousel = () => {
    return (
        <div>
            <AliceCarousel
                            mouseTracking
                            infinite
                            autoPlay
                            autoPlayInterval={1000}
                            disableButtonsControls
                            disableDotsControls={false}
                            items={items}
                            responsive={responsive}
                        />
        </div>
    );
};

export default HomeSectionCarousel;