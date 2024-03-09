import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/ContextProvider";
import { useToast } from "@chakra-ui/react";

function Cart() {
  const toast = useToast()
  const { cartData,setCartData } = useContext(ContextData);
  const [remove,setRemove] = useState({})
  // console.log(remove.id)
  // console.log(remove)
  useEffect(()=>{
    let cartRemove = cartData.filter((ele => ele.id != remove.id))
    setCartData(cartRemove)
  },[remove])
  
  // console.log(cartData);
  return (
    <div className="p-4 max-w-xl mx-auto mt-32">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
          <h1 className="text-lg font-bold">Shopping Cart</h1>
          <span className="text-gray-600">{`${cartData.length} items`}</span>
        </div>
        {cartData.map((ele) => {
          return (
            <div className="p-4" key={ele.id}>
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 object-contain rounded-lg mr-4"
                  src={ele.images[0]}
                  alt="Product"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{ele.title}</h2>
                  <span className="text-gray-600">{`$ ${ele.price}`}</span>
                </div>
                <button onClick={()=>setRemove(ele)} className="text-gray-600 hover:text-red-500">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        {/* <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              className="h-16 w-16 object-contain rounded-lg mr-4"
              src="https://picsum.photos/200/200"
              alt="Product"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">Product Title</h2>
              <span className="text-gray-600">$29.99</span>
            </div>
            <button className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center mb-4">
            <img
              className="h-16 w-16 object-contain rounded-lg mr-4"
              src="https://picsum.photos/200/200"
              alt="Product"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">Product Title</h2>
              <span className="text-gray-600">$19.99</span>
            </div>
            <button className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <img
              className="h-16 w-16 object-contain rounded-lg mr-4"
              src="https://picsum.photos/200/200"
              alt="Product"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">Product Title</h2>
              <span className="text-gray-600">$24.99</span>
            </div>
            <button className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
          </div>
        </div> */}
        <div className="px-4 py-3 bg-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-lg">{`$ ${cartData?.reduce((total, currentValue) => total = total + currentValue.price,0)}`}</span>
          </div>
          <button onClick={() =>
        toast({
          title: 'Hooray! Your order was confirmed',
          description: "Thank you for your order!",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
