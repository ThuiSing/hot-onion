import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";

const FoodItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [items, setItems] = useState([]);
  const [menu, setMenu] = useState("Breakfast");

  //fetch data from public
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/foodItems.json");
      const data = await res.json();
      setItems(data);
      setNewItems(data.filter((item) => item.category === "Breakfast"));
    };
    fetchData();
  }, []);

  //style
  const handleAlls = (category) => {
    if (items.length > 0) {
      const showItems = items.filter((item) => item.category === category);
      setNewItems(showItems);
    }
    setMenu(category);
  };
  // console.log(menu);
  return (
    <div className="container mx-auto py-16 px-4 md:px-0">
      <div className="flex justify-evenly mx-auto md:w-2/4 ">
        <h4
          onClick={() => handleAlls("Breakfast")}
          className={
            menu === "Breakfast"
              ? "text-lg font-medium cursor-pointer px-2  border-b-2 border-red-800"
              : "text-lg font-medium px-2 cursor-pointer"
          }
        >
          Breakfast
        </h4>
        <h4
          onClick={() => handleAlls("Lunch")}
          className={
            menu === "Lunch"
              ? "text-lg font-medium cursor-pointer  px-2 border-b-2 border-red-800"
              : "text-lg font-medium  px-2 cursor-pointer"
          }
        >
          Lunch
        </h4>
        <h4
          onClick={() => handleAlls("Dinner")}
          className={
            menu === "Dinner"
              ? "text-lg font-medium cursor-pointer px-2 border-b-2 border-red-800"
              : "text-lg font-medium  px-2  cursor-pointer"
          }
        >
          Dinner
        </h4>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {newItems.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
