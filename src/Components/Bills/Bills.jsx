import React, { useEffect, useState } from 'react';
import Bill from './bill';

const Bills = () => {

    const [bills,setBills] =useState([])



    useEffect(()=>{
        fetch("bill.json")
        .then(res=>(res.json()))
        .then(data=>setBills(data))
    },
[])

console.log(bills)

    return (
        <div>

            {
                bills.map((bill)=><Bill bill={bill}></Bill>)
            }
            
        </div>
    );
};

export default Bills;