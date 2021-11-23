import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const SignUp = () => {
  return (
    <div className="login flex justify-center items-center py-12 h-screen px-4">
      <div className="md:w-1/2 lg:w-1/3 bg-white px-4 py-8 rounded">
        <div>
          <img className="w-80 mx-auto" src={logo} alt="" />
        </div>
        <form action="" className="mt-16 space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password "
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <input
            type="password"
            placeholder="Confirm password "
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <button type="submit" className="btn w-full p-3 rounded">
            Sign in
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/login">
            <h2 className="text-xl text-red-600">Already have a Account?</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
