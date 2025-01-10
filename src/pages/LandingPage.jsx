import React, { useEffect } from "react";
import { Categories, TopProducts } from "../data/CategoriesData";
import InformationComponents from "../components/InformationComponents";
import CategoriesComponent from "../components/CategoriesComponent";
import TopProductCard from "../components/CardComponent.jsx/TopProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { IoBagAddSharp } from "react-icons/io5";
import { addtoCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(TopProducts));
  }, []);

  const handleAddToCart = (e,product) =>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addtoCart(product));
  }
  
  return (
    <div className="bg-neutral-900 py-2 pt-28">
      <div className="w-full flex flex-col md:flex-row md:px-12 px-4 gap-8">
        <div className="md:w-1/5">
          <h1 className="text-xl text-gray-200 font-semibold bg-red-700 py-2 px-2 rounded-md">
            Shop by Categories
          </h1>
          <div>
            {Categories.map((data, idx) => {
              return (
                <div key={idx} className="">
                  <div className="text-gray-200 mt-6 font-semibold">
                    {idx + 1}. {data}.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative md:w-4/5 h-[200px] md:h-fit">
          <img
            src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_1920/India%20LOB/marquee/IN_Clothing_-Caps-_-Bags_Category-Page_agar_02"
            alt=""
            className="size-full"
          />
          <div className="absolute md:top-[50%] md:left-[30%] top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%]">
            <h4 className="md:font-extrabold font-semibold md:text-2xl">
              RS ShopifY
            </h4>
            <h1 className="font-bold md:text-4xl text-xl md:mt-4 mt-2">
              WELCOME TO RS ShopifY
            </h1>
            <h4 className="font-semibold text-[13px] md:text-lg">
              Million+ Products
            </h4>
            <Link to={"/shop"} className="bg-red-700 px-6 py-2 rounded-sm text-white font-bold text-[13px]">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <InformationComponents />
      <CategoriesComponent />
      <div>
        <h2 className="text-gray-200 font-bold md:text-5xl text-3xl text-center">
          Top Products
        </h2>
        <div className="md:grid md:grid-cols-5 gap-4 space-y-4 md:space-y-0 py-5 md:px-12 px-4">
          {products.products.map((product) => (
            <div
              key={product.id}
              className="h-fit md:w-[240px] rounded-lg shadow-lg cursor-pointer hover:scale-95 duration-500 bg-neutral-700"
            >
             <TopProductCard product={product} handleAddToCart={handleAddToCart}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
