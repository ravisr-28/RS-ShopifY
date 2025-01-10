import React from "react";
import { IoBagAddSharp } from "react-icons/io5";

const TopProductCard = ({ product,handleAddToCart }) => {

  return (
    <div className="bg-neutral-900">
      <div className="rounded-b-lg rounded-t-sm bg-neutral-700">
        <img
          src={product.image}
          className="h-[230px] w-full object-cover rounded-t-sm"
          alt=""
        />
        <div className="py-2 flex justify-between">
          <div>
            <h1 className="text-white font-semibold inline-block overflow-hidden text-ellipsis px-2">
              {product.name}
            </h1>
            <h3 className="text-white px-2">
              &#8377;:- <span className="font-bold">{product.price}</span>
            </h3>
          </div>
          <button onClick={(e)=>{handleAddToCart(e,product)}} className="text-[14px] font-bold text-gray-200 px-4 rounded-sm mr-1 bg-red-700 md:block hidden">
            Add To Cart
          </button>
          <button onClick={(e)=>{handleAddToCart(e,product)}} className="font-bold px-4 rounded-sm mr-2 bg-gray-200 md:hidden">
            <IoBagAddSharp size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
