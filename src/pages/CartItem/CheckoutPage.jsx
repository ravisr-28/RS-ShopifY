import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({setOrder}) => {
  const [toggleBtn1, setToggleBtn1] = useState(true);
  const [toggleBtn2, setToggleBtn2] = useState(false);
  const [toggleBtn3, setToggleBtn3] = useState(false);
  const [shippingInformation,setShippingInformation] = useState({
    address:'',
    city:'',
    zipcode:''
  })
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  const handleOrder = ()=>{
    const newOrder = {
        products: cart.products,
        orderNumber: "21334",
        shippingInfo:shippingInformation,
        totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 bg-neutral-900">
      <h2 className="text-2xl font-semibold mt-4 text-gray-200">CheckOut</h2>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing */}
          <div className="border p-2 mb-6">
            <div
              onClick={() => setToggleBtn1(!toggleBtn1)}
              className="flex justify-between items-center"
            >
              <h3 className="text-gray-200 text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {toggleBtn1 ? (
                <FaAngleDown className="text-gray-200" size={24} />
              ) : (
                <FaAngleUp className="text-gray-200" size={24} />
              )}
            </div>
            <div className={`space-y-4 ${toggleBtn1 ? "" : "hidden"}`}>
              <div className="block text-gray-200">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                />
              </div>
              <div className="block text-gray-200">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                />
              </div>
              <div className="block text-gray-200">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter phone no"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Shipping */}
          <div className="border p-2 mb-6">
            <div
              onClick={() => setToggleBtn2(!toggleBtn2)}
              className="flex justify-between items-center"
            >
              <h3 className="text-gray-200 text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {toggleBtn2 ? (
                <FaAngleDown className="text-gray-200" size={24} />
              ) : (
                <FaAngleUp className="text-gray-200" size={24} />
              )}
            </div>
            <div className={`space-y-4 ${toggleBtn2 ? "" : "hidden"}`}>
              <div className="block text-gray-200">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                  onChange={(e)=>setShippingInformation({...shippingInformation,address: e.target.value})}
                />
              </div>
              <div className="block text-gray-200">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                  onChange={(e)=>setShippingInformation({...shippingInformation,city: e.target.value})}
                />
              </div>
              <div className="block text-gray-200">
                <label htmlFor="">Zip code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter zip code"
                  className="outline-none w-full px-4 py-2 bg-neutral-800 text-gray-200 placeholder:text-gray-300 rounded-md"
                  onChange={(e)=>setShippingInformation({...shippingInformation,zipcode: e.target.value})}
                />
              </div>
            </div>
          </div>
          {/* Payment */}
          <div className="border p-2 mb-6">
            <div
              onClick={() => setToggleBtn3(!toggleBtn3)}
              className="flex justify-between items-center"
            >
              <h3 className="text-gray-200 text-lg font-semibold mb-2">
                Payment Method
              </h3>
              {toggleBtn3 ? (
                <FaAngleDown className="text-gray-200" size={24} />
              ) : (
                <FaAngleUp className="text-gray-200" size={24} />
              )}
            </div>
            <div className={`space-y-4 ${toggleBtn3 ? "" : "hidden"}`}>
              <div className="flex items-center mb-2 gap-2 text-gray-200">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                  className=""
                />
                <label htmlFor="" className="block">
                  Cash on delivery
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2 text-gray-200">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "DC"}
                  onChange={() => setPaymentMethod("DC")}
                  className=""
                />
                <label htmlFor="" className="block">
                  DEBIT CARD
                </label>
              </div>
              {paymentMethod === "DC" && (
                <div>
                  <h3 className="text-gray-200 font-semibold">
                    Debit card information
                  </h3>
                  <div className="flex flex-col mt-4">
                    <label htmlFor="" className="text-gray-200">
                      Card Number:-
                    </label>
                    <input
                      type="text"
                      className="outline-none bg-neutral-800 py-2 rounded-md text-gray-300 px-4"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="" className="text-gray-200">
                      Card Holder Name:-
                    </label>
                    <input
                      type="text"
                      className="outline-none bg-neutral-800 py-2 rounded-md text-gray-300 px-4"
                    />
                  </div>
                  <div className="">
                    <div className="flex flex-row mt-4 mb-4 ml-2 items-center">
                      <label htmlFor="" className="text-gray-200">
                        Expire date :-
                      </label>
                      <input
                        type="text"
                        className="outline-none bg-neutral-800 py-1.5 rounded-md text-gray-300 px-4 ml-2"
                      />
                      <div className="flex justify-end items-center ml-16">
                        <label htmlFor="" className="text-gray-200">
                          CVV Number :-
                        </label>
                        <input
                          type="text"
                          className="outline-none bg-neutral-800 py-1.5 rounded-md text-gray-300 px-4 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-neutral-800 p-2 rounded-lg shadow-md border">
          <h2 className="text-gray-200 font-bold">Order Summary</h2>
          <div>
            {cart.products.map((product) => (
              <div className="">
                <div className="flex rounded-md bg-neutral-900 p-2 mt-2 shadow-lg">
                  <img
                    src={product.image}
                    alt=""
                    className="h-20 w-20 rounded-md border object-cover"
                  />
                  <div className="ml-4 text-gray-200">
                    <h3 className="">{product.name}.</h3>
                    <h4>&#8377;{product.price}.00 x {product.quantity}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-gray-200 mt-2">
                <span>Total price :-</span>
                <span> &#8377;{cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-red-600 mt-4 text-white font-bold w-full py-1.5 rounded-md" onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;