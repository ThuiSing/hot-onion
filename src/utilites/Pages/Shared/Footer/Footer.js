import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  //   console.log(year);
  return (
    <footer className="bg-footer text-white py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 space-y-8 md:space=y-0">
          <div className=" md:col-span-3">
            <NavHashLink to="/">
              <img className="w-48" src={logo} alt="Red onion logo" />
            </NavHashLink>
          </div>
          <div className="space-y-2">
            <Link className="block" to="#">
              About online Food
            </Link>
            <Link className="block" to="#">
              Online Blog
            </Link>
            <Link className="block" to="#">
              Sign up Deliver
            </Link>
            <Link className="block" to="#">
              Add your Restaurant
            </Link>
          </div>
          <div className="space-y-2">
            <Link className="block" to="#">
              Get Help
            </Link>
            <Link className="block" to="#">
              Read FAQs
            </Link>
            <Link className="block" to="#">
              View All Cities
            </Link>
            <Link className="block" to="#">
              Restaurant Near Me
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-16">
          <div className="text-gray-500 order-2 md:order-1 pt-6 md:pt-0 text-center">
            <h3>Copyright &copy; {year} Red Onion Foods </h3>
          </div>
          <div className=" md:w-1/3 flex justify-between items-center">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Tearm Of Use</Link>
            <Link to="#">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
