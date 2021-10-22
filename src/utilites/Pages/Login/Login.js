import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import googleLogo from "../../images/icon/GoogleLogo.png";
import "./login.css";

const Login = () => {
  return (
    <div className="login flex justify-center items-center py-12 h-screen">
      <div className="md:w-1/3 bg-white px-4 py-8 rounded">
        <div>
          <img className="w-80 mx-auto" src={logo} alt="" />
        </div>
        <form action="" className="mt-16 space-y-5">
          <input
            type="Email"
            placeholder="Email"
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password "
            className="w-full outline-none rounded border p-3 bg-gray-100"
          />
          <button type="submit" className="btn w-full p-3 rounded">
            Log in
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/sign-up">
            <h2 className="text-xl text-red-600">Create a new Account?</h2>
          </Link>
          <hr className="my-3" />
          <button className="flex justify-center items-center text-center bg-white rounded w-full border p-2 mt-4 ">
            <span className="mr-3 ">
              <img className="w-8" src={googleLogo} alt="" />
            </span>
            Sign with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
