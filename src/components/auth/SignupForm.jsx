import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="flex justify-evenly items-center h-screen p-16 text-white flex-wrap">
      <img
        src="/logos/x-logo.png"
        alt="X Logo"
        className="invert md:h-80 h-40"
      ></img>
      <div className=" flex flex-col gap-8 ">
        <div className="flex flex-col gap-3">
          <h1 className=" font-extrabold  text-4xl md:text-7xl">
            Happening now
          </h1>
          <h1 className="font-bold text-4xl">Join today.</h1>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" border-[#2f3336] border-1 w-60 md:w-75 px-6 py-1 focus-within:border-blue-500 focus-within:ring-1  focus-within:ring-blue-500">
            <label for="username" className="text-[#2f3336] ">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="border-0 py-1 outline-none focus:ring-0"
              placeholder="Enter your username"
            />
          </div>
          <div className=" border-[#2f3336] border-1 w-60 md:w-75 px-6 py-1  focus-within:border-blue-500 focus-within:ring-1  focus-within:ring-blue-500">
            <label for="password" className="text-[#2f3336]">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="border-0 py-1 outline-none focus:ring-0"
              placeholder="Enter your password"
            />
          </div>
          <div className=" border-[#2f3336] border-1 w-60 md:w-75 px-6 py-1  focus-within:border-blue-500 focus-within:ring-1  focus-within:ring-blue-500">
            <label for="password" className="text-[#2f3336]">
             Confirm Your Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="border-0 py-1 outline-none focus:ring-0"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div>
          <Link
            className="border-[#2f3336] border-1 px-20 py-2 rounded-xl"
            to="/home"
          >
            Sign up
          </Link>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="font-bold">Already have an account?</h1>
          <div>
            <Link
              className="border-[#2f3336] border-1 px-20 py-2 rounded-xl"
              to="/"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
