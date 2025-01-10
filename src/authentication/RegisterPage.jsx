import React from 'react'
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="flex flex-wrap bg-neutral-900 pt-28 py-8 md:px-12 px-4">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-2xl font-bold text-gray-200">
            Welcome To <span className="text-3xl">RS ShopifY</span>
          </p>
          <p className="mt-2 text-left text-gray-200">
            Welcome back, please enter your details.
          </p>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex transition rounded-md">
                <input
                  type="text"
                  id="name"
                  className="w-full flex-1 bg-neutral-800 px-4 py-2 text-gray-200 outline-none rounded-md"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex transition rounded-md">
                <input
                  type="email"
                  id="login-email"
                  className="w-full flex-1 bg-neutral-800 px-4 py-2 text-gray-200 outline-none rounded-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className="relative flex transition rounded-md">
                <input
                  type="password"
                  id="login-password"
                  className="w-full bg-neutral-800 px-4 py-2 text-base text-gray-200 outline-none rounded-md"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-gray-200 shadow-md"
            >
              Log in
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-400">
              Already have an account?
              <Link
                to={"/login"}
                className="underline-offset-4 font-semibold text-gray-200 underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-[600px] select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          {/* <p className="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our compeititors and stay consistant. While
            they're bogged won with techincal debt, we're realeasing new
            features.
          </p>
          <p className="mb-4 text-3xl font-semibold">John Elmond</p>
          <p className="">Founder, Emogue</p>
          <p className="mb-7 text-sm opacity-70">Web Design Agency</p> */}
        </div>
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90 rounded-lg"
          src="https://cdn.psdrepo.com/images/2x/ecommerce-landing-page-2-psd-j2.jpg"
        />
      </div>
    </div>
  );
}
