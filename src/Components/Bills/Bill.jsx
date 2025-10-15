import React from "react";
import { Link } from "react-router";

const Bill = ({ bill }) => {
  const { icon, due_date, bill_type, organization, amount,id } = bill;

  return (
    <div className="my-12">
      <div className="card common-shadow max-w-1/2  mx-auto lg:card-side p-4  bg-base-100  mt-4 shadow-sm">
        <img src={icon} className="w-52 p-4 " alt="" />
        <div className="card-body flex flex-col justify-between border-blue-500 rounded-tl-4xl border-l">
          <div className="flex flex-row pb-6 justify-between">
            <h2 className="card-title text-xl md:text-2xl font-bold text-gray-500">
              {bill_type}
            </h2>
            <h2
              className="px-5 py-1 border-r border-l w-fit rounded-bl-4xl rounded-tr-4xl border-red-600 font-semibold
          "
            >
              {organization}
            </h2>
          </div>
          <div>
            <h1 className="">Due:{amount} Taka</h1>
            <h1> Last Date for Pay : {due_date}</h1>
          </div>
          
            <Link to={`/details/${id}`} className="btn mt-6 bg-blue-400">Pay</Link>

        </div>
      </div>
    </div>
  );
};

export default Bill;
