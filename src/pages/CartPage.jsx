import React, { useState } from "react";
import { MdArrowForward, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import ChangeAddress from "./CartItem/ChangeAddress";
import { decreaseQauntity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState("Painal-Bihta-Patna");
  const [isModalOpen,setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <section className="bg-neutral-900 py-12 sm:py-16 lg:py-20">
      {cart.products.length > 0 ? (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-200 md:mt-6 mt-20">Your Cart</h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="shadow">
              <div className="md:px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  {cart.products.map((product) => (
                    <ul key={product.id} className="-my-8">
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="flex flex-col md:flex-row p-4 bg-neutral-800 rounded-lg">
                          <div className="shrink-0">
                          <img
                            className="h-44 md:h-32 md:w-32 w-full max-w-full rounded-lg object-cover"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2 mt-2">
                            <div className="md:ml-4 sm:pr-5">
                              <p className="text-base font-semibold text-gray-200">
                                {product.name}
                              </p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-200">
                                &#8377;{product.price}.00
                              </p>
                            </div>
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-200 sm:order-2 sm:ml-8 sm:text-right">
                                &#8377;{product.quantity * product.price}.00
                              </p>

                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button onClick={()=> dispatch(decreaseQauntity(product.id))} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4">
                                    -
                                  </button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    {product.quantity}
                                  </div>
                                  <button onClick={() => dispatch(increaseQuantity(product.id))} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4">
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              type="button"
                              onClick={()=>dispatch(removeFromCart(product.id))}
                              className="flex rounded p-2 text-center text-red-600"
                            >
                              <MdDelete size={24} />
                            </button>
                          </div>
                        </div>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-200">Total Item:</p>
                    <p className="text-lg font-semibold text-gray-300">
                      {cart.totalQuantity}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-200">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-300">
                      &#8377; {cart.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-200">Shipping To:</p>
                    <p className="flex flex-col text-lg font-semibold text-gray-300">
                      {address}
                      <button onClick={()=>setIsModalOpen(true)} className="text-right text-blue-500 underline text-[15px]">
                        Change Address
                      </button>
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-200">Total</p>
                  <p className="text-2xl font-semibold text-gray-300">
                    <span className="text-2xl font-normal text-gray-300">
                      &#8377; {cart.totalPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-red-700 px-6 py-4 text-lg font-semibold text-white"
                    onClick={()=>navigate('/checkout')}
                  >
                    Proceed To Checkout <MdArrowForward size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} changeaddress={<ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />} />
        </div>
      ) : (
        <div className="w-full md:h-[500px] md:mt-8 mt-20">
          <h1 className="text-white font-bold text-4xl text-center">
            Cart Is Empty 🙁
          </h1>
          <div className="flex justify-center items-center mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
              alt=""
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
