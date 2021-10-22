import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useOrder } from "../../context/OrderProvider";
import { addToDb } from "../../FakeDb/fakedb";
import useItems from "../../Hooks/useItems";

const FoodItemDetails = () => {
  // const [foodItem, setFoodItem] = useState([]);
  const [items] = useItems();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleOrder } = useOrder();
  const history = useHistory();
  /*  // const [singleItem, setSingleItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  //get id
  
  // console.log(items);

  useEffect(() => {
    if (singleItem) {
      const matchedItem = items.find((item) => item.id === parseInt(id));
      if (matchedItem) {
        matchedItem.quantity = quantity;
        matchedItem.price = matchedItem.price * quantity;
        setSingleItem(matchedItem);
      }
    }
  }, [items]);

  const handlePlus = (isTrue) => {
    isTrue
      ? quantity > 0 && setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };

  const prices = singleItem?.price * quantity; */

  //handel
  /* const handleBtn = (foodItem) => {
    // setCart(foodItem);
    const exists = cart.find((food) => food.id === foodItem.id);
    console.log(exists);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((food) => food.id !== foodItem.id);
      exists["quantity"] = exists["quantity"] + 1;
      foodItem["price"] = foodItem["price"] + exists["price"];
      newCart = [...rest, foodItem];
    } else {
      foodItem.quantity = quantity;
      foodItem["price"] = foodItem["price"] * quantity;
      newCart = [...cart, foodItem];
    }
    setCart(newCart);
    // if (singleItem) {
    //   singleItem.quantity = quantity;
    //   singleItem["price"] = singleItem["price"] * quantity;
    // }
    // setCart(newCart);
    console.log(cart);
    // addToDb(foodItem.id);
  };
  console.log(cart, "t");
 */
  const handleBtn = (food) => {
    food["quantity"] = quantity;
    food.price = food.price * quantity;
    handleOrder(food);
    history.push("/cart");
    // console.log(food);
  };
  const handlePlus = (type) => {
    type
      ? quantity > 0 && setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <div className="container mx-auto">
      {items
        ?.filter((item) => item.id === parseInt(id))
        ?.map((food) => (
          <div key={food.id} className=" flex justify-between items-center">
            <div className="md:w-1/2">
              <h2 className="text-6xl font-semibold">{food?.name}</h2>
              <p className="md:w-2/3 my-4">{food?.description}</p>
              <div className="text-4xl font-semibold flex items-center  ">
                <h3>${(food?.price * quantity).toFixed(2)}</h3>
                <div className="border border-1 ml-8 flex justify-between items-center rounded-3xl px-4 py-1">
                  <span
                    className="cursor-pointer"
                    onClick={() => handlePlus(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#F91944"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </span>
                  <span className="mx-6">{quantity}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handlePlus(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#F91944"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleBtn(food)}
                  className="btn mt-4 px-8 py-3 rounded-3xl flex items-center"
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  Add
                </button>
              </div>
            </div>
            <div className="p-4">
              <img className="w-4/5" src={food?.img} alt="" />
            </div>
          </div>
        ))}
    </div>

    /*   <div className="container mx-auto flex justify-between items-center">
      <div className="md:w-1/2">
        <h2 className="text-6xl font-semibold">{singleItem?.name}</h2>
        <p className="md:w-2/3 my-4">{singleItem?.description}</p>
        <div className="text-4xl font-semibold flex items-center  ">
          <h3>${prices.toFixed(2)}</h3>
          <div className="border border-1 ml-8 flex justify-between items-center rounded-3xl px-4 py-1">
            <span className="cursor-pointer" onClick={() => handlePlus(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F91944"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </span>
            <span className="mx-6">{quantity}</span>
            <span className="cursor-pointer" onClick={() => handlePlus(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F91944"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleBtn}
            className="btn mt-4 px-8 py-3 rounded-3xl flex items-center"
          >
            <span className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            Add
          </button>
        </div>
      </div>
      <div className="p-4">
        <img className="w-4/5" src={singleItem?.img} alt="" />
      </div>
    </div> */
  );
};

export default FoodItemDetails;
