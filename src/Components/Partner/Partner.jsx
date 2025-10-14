import React, { useEffect, useState } from "react";
import SinglePartner from "./SinglePartner";

const Partner = () => {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    fetch("partnerData.json")
      .then((res) => res.json())
      .then((data) => setPartner(data));
  }, []);

  console.log(partner);
  return (
    <div>
      <div className="text-center py-20">
        {" "}
        <h1 className="font-bold text-gray-500 text-4xl">Work With Us</h1>
      </div>
        <div className="grid partner-section grid-cols-6 py-4 gap-6">
          {partner.map((single) => (
            <SinglePartner key={single.id} single={single}></SinglePartner>
          ))}
        </div>
      
    </div>
  );
};

export default Partner;
