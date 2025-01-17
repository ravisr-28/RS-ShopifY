import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({Order}) => {
  const navigate = useNavigate()
  return (
    <div className="bg-neutral-900 pt-28 pb-8 md:px-12 px-4">
      <h3 className="text-gray-200 font-semibold">Thank You For Your Order !</h3>
      <p className="text-gray-200 font-light text-[13px]">
        Your order has been placed successfully you will receive an email
        confirmation shortly.
      </p>
      <div className="bg-neutral-800 p-4 my-4 rounded-lg shadow-lg">
        <h3 className="text-gray-200 font-bold text-xl">Order Summary</h3>
        <h4 className="text-gray-200 font-extralight text-[14px]">Order Number:{Order.orderNumber}</h4>
        <div>
          <p className="text-gray-200 font-semibold mt-2">Shipping Information</p>
          <p className="text-gray-200 font-extralight text-[14px]">{Order.shippingInfo.address},</p>
          <p className="text-gray-200 font-extralight text-[14px]">{Order.shippingInfo.city},</p>
          <p className="text-gray-200 font-extralight text-[14px]">{Order.shippingInfo.zipcode}</p>
        </div>
        <div>
          <h4 className="text-gray-200 font-bold mt-2">Ordered Products</h4>
          {Order.products.map((product) => (
            <div key={product.id} className="flex justify-between">
              <h4 className="text-gray-200 font-extralight text-[14px]">
                {product.name} x {product.quantity}
              </h4>
              <h4 className="text-gray-200 font-extralight text-[14px]">
                &#8377;{product.price * product.quantity}.00
              </h4>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <h4 className="text-gray-200 font-bold">Total Price :- </h4>
          <h4 className="text-gray-200 font-semibold">&#8377;{Order.totalPrice.toFixed(2)} </h4>
        </div>
      </div>
      <div className="md:space-x-5 space-y-4 md:space-y-0">
        <button className="px-8 py-2 text-gray-200 font-bold text-[14px] bg-red-600 rounded-md">
          Order Tracking
        </button>
        <button className="px-8 py-2 text-gray-200 font-bold text-[14px] bg-green-600 rounded-md" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation

// Tu rahna loyalty ke sath main tera har hadd tk sath nibhaunga,meri feelings ka samman tu krna main tere sajde me bhi sar jhukaunga, koi puchega tere baare me toh saan se sabko bataunga,lekin agar man bana liya hoga tune jaane ka to tujhe rok bhi n paunga,par jaan hai tu meri is baat se main kyun sarmaunga,koi puchega tere baare me toh saan se sbko bataunga ki mere hathon ki lakir hai tu,mere pairon ki moch hai,tu hamdard hai meri zindagi ka haan tu meri jaan hai.

// 7070843526