import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import { TopProducts } from '../data/CategoriesData';
import { IoBagAddSharp } from 'react-icons/io5';
import { addtoCart } from '../redux/cartSlice';

const ShopPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    useEffect(() => {
      dispatch(setProducts(TopProducts));
    }, []);
    const handleAddToCart=(e,product)=>{
      e.stopPropagation()
      e.preventDefault()
      dispatch(addtoCart(product))
    }
  return (
    <div className="bg-neutral-900 py-6">
      <h1 className="text-gray-200 mt-20 font-bold md:text-5xl text-3xl text-center ">
        SHOP
      </h1>
      <div className="md:grid md:grid-cols-5 gap-4 space-y-4 md:space-y-0 py-5  md:px-12 px-4">
        {products.products.map((product) => {
          return (
            <div
              key={product.id}
              className="h-fit md:w-[240px] rounded-lg shadow-lg cursor-pointer hover:scale-95 duration-500 bg-neutral-700"
            >
              <img
                src={product.image}
                className="h-[230px] w-full object-cover"
                alt=""
              />
              <div className="py-2 flex justify-between">
                <div>
                  <h1 className="text-white font-semibold px-2">{product.name}</h1>
                  <h3 className="text-white px-2">
                    &#8377;:- <span className="font-bold">{product.price}.00</span>
                  </h3>
                </div>
                <button onClick={(e)=>handleAddToCart(e,product)} className="text-[14px] font-bold text-gray-200 px-4 rounded-sm mr-1 bg-red-700 md:block hidden">
                  Add To Cart
                </button>
                <button onClick={(e)=>{handleAddToCart(e,product)}} className="font-bold px-4 rounded-sm mr-1 bg-gray-200 md:hidden">
                  <IoBagAddSharp size={24} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage