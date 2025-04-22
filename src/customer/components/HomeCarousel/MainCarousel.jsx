import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item, index) => (
        <img
            key={index}
            className='cursor-pointer w-full h-[400px] object-cover'
            role='presentation'
            src={item.image}
            alt=''
            onClick={() => window.location.href = item.path}
        />
    ));

    const responsive = {
        0: { items: 1 },         // On small screens, show 1 item
        1024: { items: 1 }       // On larger screens too — single image view
    };

    return (
        <div className="w-full h-[400px] relative">
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

export default MainCarousel;
