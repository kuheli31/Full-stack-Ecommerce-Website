import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import HomeSectionCardData from "../../components/HomeSectionCard/HomeSectionCardData";

function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <h1 className="font-bold text-4xl">Men's Wear</h1>
        <HomeSectionCarousel items={HomeSectionCardData.mensWear} />
        
        <h1 className="font-bold text-4xl">Women's Wear</h1>
        <HomeSectionCarousel items={HomeSectionCardData.womensWear} />
        
        <h1 className="font-bold text-4xl">Toys</h1>
        <HomeSectionCarousel items={HomeSectionCardData.toys} />
        
        <h1 className="font-bold text-4xl">Home Decorations</h1>
        <HomeSectionCarousel items={HomeSectionCardData.homeDecor} />

        <h1 className="font-bold text-4xl">Electronic Gadgets</h1>
        <HomeSectionCarousel items={HomeSectionCardData.electronicsGadgets} />

        <h1 className="font-bold text-4xl">Fitness Wellness</h1>
        <HomeSectionCarousel items={HomeSectionCardData.fitnessWellness} />

        <h1 className="font-bold text-4xl">Men's Shoes</h1>
        <HomeSectionCarousel items={HomeSectionCardData.mensShoes} />

        <h1 className="font-bold text-4xl">Women's Shoes</h1>
        <HomeSectionCarousel items={HomeSectionCardData.womensShoes} />
      </div>
    </div>
  );
}

export default HomePage;
