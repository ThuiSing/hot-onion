import React, { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};
const OrderProvider = ({ children }) => {
  //   console.log(children);
  const [order, setOrder] = useState([]);

  // add order function
  const handleOrder = (food) => {
    console.log(food);
    const alreadyAdded = order.find((item) => item.id === food.id);
    if (alreadyAdded) {
      alreadyAdded["quantity"] = alreadyAdded["quantity"] + food["quantity"];
    } else {
      setOrder((prevValue) => {
        return [...prevValue, food];
      });
    }
  };

  //remove order from cart
  const removeOrder = (id) => {
    setOrder((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const value = {
    setOrder,
    order,
    handleOrder,
    removeOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderProvider;
