import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://www.bing.com/th?id=OPAC.tpc75RWoUNtG%2bQ474C474&o=5&pid=21.1&w=160&h=235&rs=1&qlt=100&dpr=1.3&pcl=f5f5f5"
          alt="image"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
        <p className="mt-2 text-sm text-gray-500">Men Regular fit striped Formal</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
