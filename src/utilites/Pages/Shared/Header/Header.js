import React from "react";
import { HashLink } from "react-router-hash-link";
import { useOrder } from "../../../context/OrderProvider";
import logo from "../../../images/logo2.png";

const Header = () => {
  const { order } = useOrder();
  // console.log(order.length);
  return (
    <header className="flex justify-between items-center fixed z-40 top-0 sm:flex-row  sm:text-left sm:justify-between py-4 px-6 bg-white shadow w-full ">
      <div>
        <HashLink to="/">
          <img className="w-48" src={logo} alt="Red onion logo" />
        </HashLink>
      </div>
      <div className=" md:w-1/6 flex items-center justify-evenly">
        <HashLink to="/cart">
          <div className="relative mr-4 py-3 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="absolute top-0 right-0  rounded-full w-5 h-6 text-center font-bold bg-red-800 text-white">
              {order.length}
            </h3>
          </div>
        </HashLink>
        <HashLink className="font-medium text-md" to="/login">
          Log in
        </HashLink>
        <HashLink className="btn px-4 py-2  rounded-3xl" to="/sign-up">
          Sign Up
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
