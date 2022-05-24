import React, { useState } from "react";
import { useOrder } from "../../context/OrderProvider";
import ShowCart from "../showCart/ShowCart";

const Cart = () => {
  const { order, removeOrder, setOrder } = useOrder();
  const [userDetails, setUserDetails] = useState({
    deliverType: "",
    flat: "",
    address: "",
    businessName: "",
    deliveryName: "",
  });
  const [details, setDetails] = useState({});
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newDetail = { ...userDetails };
    newDetail[name] = value;
    setUserDetails(newDetail);
  };
  const handleRemove = (id) => {
    removeOrder(id);
  };

  // console.log(order);
  const totalPrice = order.reduce((prevValue, currentValue) => {
    const priceWithAQuantity = currentValue.price * currentValue.quantity;
    return prevValue + priceWithAQuantity;
  }, 0);

  const handleDetails = (e) => {
    e.preventDefault();
    setDetails(userDetails);
  };

  return (
    <div className="container mx-auto grid md:grid-cols-2 py-16 mt-16 px-4 md:px-0">
      <div>
        <h3 className="text-2xl font-medium  border-b-2 py-3">
          Edit Delivery Details
        </h3>
        <form onSubmit={handleDetails} className="space-y-9 mt-8">
          <select
            name="deliverType"
            onChange={handleInput}
            className="w-full p-3 bg-gray-200 outline-none"
            id="cars"
          >
            <option value="Home Delivery">Home Delivery</option>
            <option value="Cash on payment">Cash on Delivery</option>
          </select>
          <input
            name="flat"
            onBlur={handleInput}
            type="text"
            placeholder="Flat ,suite or floor"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            name="address"
            onBlur={handleInput}
            type="text"
            placeholder="Enter your Address"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            name="businessName"
            onBlur={handleInput}
            type="text"
            placeholder="Business Name"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            name="deliveryName"
            onBlur={handleInput}
            type="text"
            placeholder="add delivery name"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <button type="submit" className="btn w-full py-3 rounded-md">
            Save &amp; Continue
          </button>
        </form>
      </div>
      <div className="md:flex justify-end mt-10 md:mt-0">
        <div className="md:w-4/5 ">
          <h3 className="md:hidden text-2xl font-medium  border-b-2  mb-5">
            Order Details
          </h3>
          <div className="space-y-1">
            <h4 className="text-xl font-medium">
              Delivery To : {details?.deliveryName}
            </h4>
            <h4 className="text-xl font-medium">
              Delivery Address : {details?.address}
            </h4>
            <h5 className="text-md font-medium">arriving in 5minutes</h5>
          </div>
          <div className="my-5 h-72 overflow-y-scroll">
            {order.map((item, ind) => (
              <ShowCart key={ind} item={item} handleRemove={handleRemove} />
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold">
              Total price = ${totalPrice.toFixed(2)}
            </h4>
          </div>
          <button
            onClick={() => {
              alert("thanks for your order");
              setOrder([]);
            }}
            className="btn px-4 py-2 mt-3"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
