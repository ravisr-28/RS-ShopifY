import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterComponents = () => {
  return (
    <div className="bg-neutral-800 lg:px-12 px-3 py-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 py-4 justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-gray-200 font-semibold text-lg">RS ShopifY</h1>
          <p className="text-justify text-nowrap text-gray-200 text-[14px]">
            Your one-stop shop for all your needs. Shop with <br /> us and
            experience the bes online shopping <br /> experience
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-gray-200 font-semibold text-lg">Follow Us</h1>
          <ul className="flex gap-4">
            <li className="text-gray-200">
              <FaFacebook size={24} />
            </li>
            <li className="text-gray-200">
              <FaTwitter size={24} />
            </li>
            <li className="text-gray-200">
              <FaInstagram size={24} />
            </li>
            <li className="text-gray-200">
              <FaLinkedin size={24} />
            </li>
          </ul>
          <div className="w-fit">
            <input
              type="email"
              placeholder="Your Email..."
              className="outline-none w-44 px-4 py-2 rounded-l-md text-gray-700"
            />
            <button className="bg-red-700 text-gray-200 py-2 rounded-r-md px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div className="flex flex-col md:flex-row justify-between mt-2">
        <h1 className="text-gray-200 text-center font-semibold">
          &copy; 2024 RS ShopifY. All Right Reserved.
        </h1>
        <div className="flex justify-between md:gap-4 md:mt-0 mt-2">
          <h4 className="text-gray-200 text-[13px]">Privacy Policy</h4>
          <h4 className="text-gray-200 text-[13px]">Terms of Services</h4>
          {/* olacademicsupport@cuidol.in */}
          {/* helpdesk@cuidol.in */}
        </div>
      </div>
    </div>
  );
}

export default FooterComponents
