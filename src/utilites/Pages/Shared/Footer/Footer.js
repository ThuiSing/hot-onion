import React from "react";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  //   console.log(year);
  return (
    <footer className="bg-footer text-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-5">
          <div className=" md:col-span-3">
            <NavHashLink to="/">
              <img className="w-48" src={logo} alt="Red onion logo" />
            </NavHashLink>
          </div>
          <div className="space-y-2">
            <a className="block" href="#">
              About online Food
            </a>
            <a className="block" href="#">
              Online Blog
            </a>
            <a className="block" href="#">
              Sign up Deliver
            </a>
            <a className="block" href="#">
              Add your Restaurant
            </a>
          </div>
          <div className="space-y-2">
            <a className="block" href="#">
              Get Help
            </a>
            <a className="block" href="#">
              Read FAQs
            </a>
            <a className="block" href="#">
              View All Cities
            </a>
            <a className="block" href="#">
              Restaurant Near Me
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-16">
          <div className="text-gray-500">
            <h3>Copyright &copy; {year} Red Onion Foods </h3>
          </div>
          <div className=" md:w-1/3 flex justify-between items-center">
            <a href="#">Privacy Policy</a>
            <a href="#">Tearm Of Use</a>
            <a href="#">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
