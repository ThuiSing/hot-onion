import React from "react";
import btnIcon from "../../../images/icon/arrow-right.png";

const ChooseItems = ({ item }) => {
  const { img, description, icon, serviceName } = item;
  return (
    <div className="bg-white pb-4 rounded-3xl hover:shadow-md transition-all	">
      <div className="rounded-t-3xl overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="flex mt-6 px-5">
        <div className="w-16 mr-4">
          <img src={icon} alt="" />
        </div>
        <div>
          <h3 className="text-2xl text-medium">{serviceName}</h3>
          <p className="text-gray-600 my-4">{description}</p>
          <a className="flex items-center text-blue-600" href="#">
            See more
            <span>
              <img src={btnIcon} alt="" width="50" />
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseItems;
