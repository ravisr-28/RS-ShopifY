import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/productSlice";

const HeaderComponent = () => {
  const products = useSelector(state => state.cart.products)
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search))
    navigate("/filter-data")
  }
  return (
    <nav className="bg-neutral-900 lg:px-12 px-3 py-3 md:py-5 shadow-lg border-b fixed z-20 w-full ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to={"/"}
          className="text-gray-200 lg:text-3xl text-2xl font-serif font-bold"
        >
          RS ShopifY
        </Link>
        <div className="flex">
          <Link to={"/cart"} className="relative md:hidden">
            <FaShoppingCart className="text-gray-200 mt-0.5 mr-2" size={20} />
            {products.length > 0 && (
              <span className="md:hidden block absolute text-gray-200 top-[-4px] right-0 bg-red-700 rounded-full px-1.5 text-[10px]">
                {products.length}
              </span>
            )}
          </Link>
          {/* Hamburger Icon for Mobile */}
          <div
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <FaBars /> : null}
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center lg:space-x-8 space-x-4">
          <li>
            <Link to={"/"} className="text-gray-200 font-semibold text-[13px]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/shop"}
              className="text-gray-200 font-semibold text-[13px]"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-gray-200 font-semibold text-[13px]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="text-gray-200 font-semibold text-[13px]"
            >
              Contact
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="lg:block hidden">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search items..."
            className="outline-none py-2 px-3 rounded-md text-gray-700"
          />
        </form>
        <div className="md:flex hidden">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-gray-200 mt-0.5 mr-2" size={20} />
            {products.length > 0 && (
              <span className="md:block hidden absolute text-gray-200 top-[-4px] right-0 bg-red-700 rounded-full px-1.5 py-1 text-[10px]">
                {products.length}
              </span>
            )}
          </Link>
          <div className="items-center">
            <Link to={"/login"} className="text-gray-200 border-r-2 px-2">
              Login
            </Link>
            <Link to={"/register"} className="text-gray-200 px-2">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          {/* Close Icon inside the sliding menu */}
          <div
            className="text-white text-2xl p-4 cursor-pointer absolute top-0 right-0"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </div>
          <ul className="flex flex-col items-center mt-20 space-y-6">
            <li>
              <Link
                to={"/"}
                className="text-gray-200 font-semibold text-[13px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                className="text-gray-200 font-semibold text-[13px]"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="text-gray-200 font-semibold text-[13px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="text-gray-200 font-semibold text-[13px]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center mt-4 md:hidden">
            <div className="items-center">
              <Link to={"/login"} className="text-gray-200 border-r-2 px-2">
                Login
              </Link>
              <Link to={"/register"} className="text-gray-200 px-2">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e)=>setSearch(e.target.value)}
          className="lg:hidden block w-full px-4 py-2 rounded-md mt-2 outline-none"
          placeholder="Search for items..."
        />
      </form>
    </nav>
  );
};

export default HeaderComponent;