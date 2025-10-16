import React, { use,  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const BillDeatails = () => {
    const {paid, setPaid} = use(AuthContext)

    const navigate =useNavigate()
 
  const { balance, setBalance } = use(AuthContext);

  const [details, setDetails] = useState([]);
console.log(paid)
  const { id } = useParams();

  useEffect(() => {
    fetch("../../../public/bill.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleData = details.find((data) => data.id == id);
  console.log(singleData);

  const handleBalance = () => {
    const paidBill = paid.find((id) => id == singleData?.id);

    console.log(paidBill)
    if (paidBill) {
      toast.warn("alrady paid");
    } else {
      console.log(balance);
      const newBalance = balance - singleData?.amount;
      setBalance(newBalance);
      setPaid([...paid , singleData.id]);
      toast.success("Successfully Paid")
      navigate("/protected")
    }
  };

  return (
    <div className="md:grid mx-auto my-24 common-shadow max-w-96  grid-cols-2 gap-2 p-6">
      <div className=" w-full h-full">
        <img src={singleData?.icon} alt="" />
      </div>

      <div className="px-3 py-1 border-l ">
        <p className="text-gray-500 ">{singleData?.organization}</p>
        <p>{singleData?.bill_type}</p>
        <p>{singleData?.amount}</p>
        <p>{singleData?.due_date}</p>
        <button
          onClick={handleBalance}
          className="btn w-full bg-blue-400 text-gray-600 hover:bg-blue-600 hover:text-white"
        >
          Pay Bill
        </button>
      </div>
    </div>
  );
};

export default BillDeatails;
