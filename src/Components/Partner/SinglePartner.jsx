import React from "react";

const SinglePartner = ({ single }) => {

    const {logo}=single;
  console.log(single);
  return (
    <div className="flex flex-col p-10 cursor-pointer  image-section common-shadow items-center justify-center w-fit border-r-4 border-l-4 rounded-full border-blue-200">
          <img className="w-12 image h-12 "
            src={logo}
            alt="Shoes"
          />


    </div>
  );
};

export default SinglePartner;
