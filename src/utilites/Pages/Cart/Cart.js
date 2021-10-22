import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { useOrder } from "../../context/OrderProvider";
import { getStoredCart, removeFromDb } from "../../FakeDb/fakedb";
import useItems from "../../Hooks/useItems";
import ShowCart from "../showCart/ShowCart";

const Cart = () => {
  const [items, setItems] = useItems();
  const [cart, setCart] = useState([]);
  const { order, removeOrder } = useOrder();
  // console.log(order);

  useEffect(() => {
    if (items.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const id in savedCart) {
        console.log(id);
        const addedProduct = items.find(
          (product) => product.id === parseInt(id)
        );
        if (addedProduct) {
          // set quantity
          const quantity = savedCart[id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [items]);
  // console.log(cart);

  const handleRemove = (id) => {
    removeOrder(id);
    removeFromDb(id);
  };

  const totalPrice = order.reduce((prevVlue, crrnValue) => {
    // console.log(prevVlue, crrnValue);
    return prevVlue + crrnValue.price;
  }, 0);
  // console.log(totalPrice);

  return (
    <div className="container mx-auto grid grid-cols-2 py-12">
      <div>
        <h3 className="text-2xl font-medium  border-b-2 py-3">
          Edit Delivery Details
        </h3>
        <form className="space-y-7 mt-8">
          <input
            type="text"
            value="Deliver to Door"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="Flat ,suite or floor"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Address"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="add delivery name"
            className="w-full p-3 bg-gray-200 outline-none"
          />
          <button type="submit" className="btn w-full py-3 rounded-md">
            Save &amp; Continue
          </button>
        </form>
      </div>
      <div className="flex justify-end">
        <div className="w-4/5 ">
          <h4 className="text-xl font-medium">From Gulsan Something</h4>
          <h5 className="text-md font-medium">arriving in 5minutes</h5>
          <div className="my-5 h-72 overflow-y-scroll">
            {order.map((item) => (
              <ShowCart key={item.id} item={item} handleRemove={handleRemove} />
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold">
              Total price = ${totalPrice.toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
