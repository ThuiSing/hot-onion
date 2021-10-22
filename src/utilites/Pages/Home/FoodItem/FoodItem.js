import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {
  const { id, name, description, price, category } = item;
  //   console.log(item);
  return (
    <div className="group relative bg-white text-center p-10 hover:shadow-xl transition-all	relative border rounded">
      <div className="relative w-full rounded-lg overflow-hidden lg:p-8">
        <img
          src={item.img}
          width="50"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="text-xl font-bold ">
        <Link to={`/food/${id}`}>
          <span className="absolute inset-0"></span>
          {name}
        </Link>
      </h3>
      <h4 className="text-red-800 font-bold border-2 border-red-200 inline-block px-3 py-1 rounded-3xl absolute top-3 left-3">
        {category}
      </h4>
      <p className="text-base font-semibold text-gray-600 my-3">
        {description.slice(0, 40)}...
      </p>

      <h4 className="text-3xl font-bold">${price}</h4>
    </div>
  );
};

export default FoodItem;
