import React from "react";

const HomeSectionCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md p-4 w-[15rem] md:w-[16rem] lg:w-[18rem] cursor-pointer">
      <div className="h-[180px] md:h-[200px] lg:h-[250px] overflow-hidden mb-2">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default HomeSectionCard;
