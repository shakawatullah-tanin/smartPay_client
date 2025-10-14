import React from "react";

const WhyToUse = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-gray-500 font-bold text-5xl py-5">Why Smart Pay?</h1>

      <div className="flex gap-4 my-8 justify-between mx-12 items-center">
        <div className="card flex flex-col justify-center  common-shadow p-8">
            <img
              className="w-14"
              src="https://i.ibb.co.com/Qvs7cv5W/security.png"
              alt=""
            />

            <h1 className="text-gray-500 text-2xl font-bold mt-2">100% Secure</h1>
            <p className="text-sm text-gray-400 ">
              Out service is highly secure.There is no chance of getting hacked.
            </p>
 
        </div>

        <div className="card common-shadow p-8">
  
            <img
              className="w-14"
              src="https://i.ibb.co.com/VYHFMWL3/all-in-one.png"
              alt=""
            />
            <h1 className="text-gray-500 text-2xl font-bold mt-2">All in One</h1>
            <p  className="text-sm text-gray-400 ">
              All The Feature in this one. This will save you a lot of time.
            </p>

        </div>
        <div className="card common-shadow p-8">
            <img
              className="w-14"
              src="https://i.ibb.co.com/0R7jw4hJ/super-fast.png"
              alt=""
            />
            <h1 className="text-gray-500 text-2xl font-bold mt-2">Super Fast </h1>
            <p  className="text-sm text-gray-400 ">
              You can send money with one click. All the feature are also super
              fast 
            </p>
        </div>
      </div>
    </div>
  );
};

export default WhyToUse;
