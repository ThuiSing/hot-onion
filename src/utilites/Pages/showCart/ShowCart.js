import React from "react";

const ShowCart = ({ item, handleRemove }) => {
  // console.log(item);
  const { img, name, price, id, quantity } = item;
  // console.log(quantity, id);
  const Newprice = price * quantity;
  // console.log(Newprice, price);

  return (
    <div className="flex items-center border mt-3 py-3 px-2 relative">
      <div>
        <img className="w-20 " src={img} alt="" />
      </div>
      <div className="ml-8">
        <h4 className="text-xl font-medium">{name}</h4>
        <h4 className="text-md font-medium">Quantity : {quantity}</h4>
        <h4 className="font-bold text-2xl mt-2">${Newprice}</h4>
      </div>
      <div onClick={() => handleRemove(id)} className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ShowCart;
