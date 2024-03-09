import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { ContextData } from "../context/ContextProvider";

function Card(props) {
  const {price,title,images} = props
  // console.log(props);
  const {cartData,setCartData} = useContext(ContextData)
  return (
    <div className="border-2 border-solid text-center shadow-lg rounded-lg">
      <img src={images[0]} alt="images" className="h-1/2 w-100% m-auto " />
      <h1>Price : ${price}</h1>
      <h1>Title : {title} </h1>
      <button onClick={()=>setCartData([...cartData,props])} className="bg-blue-800 rounded-lg text-white w-20 h-9"><FaPlus className="inline"/>Add </button>
      {/* <Button className=" bg-blue-600 h-8 text-center pb-8"><FaPlus className="inline"/>Add</Button> */}
      
    </div>
  );
}

export default Card;
