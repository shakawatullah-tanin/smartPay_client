import React, { useEffect, useState } from 'react';
import Bill from './bill';

const Bills = () => {

    const [bills,setBills] =useState([])



    useEffect(()=>{
        fetch("https://smart-pay-server.vercel.app/bills")
        .then(res=>(res.json()))
        .then(data=>setBills(data))
    },
[])

console.log(bills)

    return (
        <div>

            {
                bills.map((bill)=><Bill key={bill.id} bill={bill}></Bill>)
            }
            
        </div>
    );
};

export default Bills;