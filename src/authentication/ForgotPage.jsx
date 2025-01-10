import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPage() {
  return (
    <body class="bg-neutral-900 pt-32 py-8">
      <div class="max-w-lg mx-auto p-8 rounded-xl shadow shadow-slate-300">
          <h1 class="text-4xl font-medium text-gray-200">Reset password.</h1>
          <p class="text-slate-300">Fill up the form to reset the password.</p>
          <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
              <label for="email">
                <p class="font-medium text-slate-200 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="w-full py-3 rounded-lg px-3 bg-neutral-800"
                  placeholder="Enter email address"
                />
              </label>

              <button class="w-full py-3 font-medium text-white bg-red-600 rounded-lg inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <span>Reset password</span>
              </button>
              <p class="text-center text-gray-200">
                Not registered yet?{" "}
                <a
                  href="#"
                  class="text-red-600 font-medium inline-flex space-x-1 items-center"
                >
                  <Link to={"/register"}>Register now </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form> 
      </div>
    </body>
  );
}
