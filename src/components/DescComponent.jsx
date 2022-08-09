import React, { useState } from "react";
import '../App.css';
import {FaOpencart} from 'react-icons/fa';

export default function DescComponent({color, disc, price2}) {

    const [qty, setQty] = useState(1);

    const discc = (Number(price2) * Number(disc)) / 100 ;
    let final_price = Number(price2) - discc;

    const handleAddition = ()=>{

        setQty(qty + 1);
    }
    const handleSubtraction = ()=>{
        if(qty===1) 
        {
            //do nothing
        }
        else
        {
            setQty(qty - 1);
        }
    }
  return (
    <div className="desc-bord">
      <h6>SNEAKER COMPANY</h6>
      <h2 style={color}>Fall Limited Edition Sneaker</h2>
      <p>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole,they'll withstand
        everything the weather can offer.
      </p>
      <h3>${final_price} <span style={{fontSize:"15px", backgroundColor:"rgb(107 175 172)", color:'white', padding:"2px", borderRadius:"5px"}}>{disc}% off</span> </h3>
      <strike>${price2}</strike>

      <div className="pricing my-2">
         <button style={{color:'rgb(107 175 172)', fontWeight:'bold', fontSize:'20px'}} className="btn btn-sm btn-light px-3 mx-2" onClick={handleSubtraction}>-</button>
         <span>{qty}</span>
         <button style={{color:'rgb(107 175 172)', fontWeight:'bold', fontSize:'20px'}} className="btn btn-sm btn-light px-3 mx-2" onClick={handleAddition}>+</button>
         <button style={{border: '2px solid rgb(107 175 172)', fontWeight:'bold'}} className="btn cart-button"><FaOpencart style={{fontSize:'20px'}} className="mx-2"/> Add to cart</button>
      </div>
    </div>
  );
}
