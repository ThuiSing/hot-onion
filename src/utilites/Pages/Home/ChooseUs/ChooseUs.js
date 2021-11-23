import React from "react";
import choose1img from "../../../images/image/chooseUs (1).png";
import choose2img from "../../../images/image/chooseUs (2).png";
import choose3img from "../../../images/image/chooseUs (3).png";
import icon1 from "../../../images/icon/chhoseUsIcon (1).png";
import icon2 from "../../../images/icon/chhoseUsIcon (2).png";
import icon3 from "../../../images/icon/chhoseUsIcon (3).png";
import ChooseItem from "../ChooseItem/ChooseItem";

const ChooseUs = () => {
  const chooseUsData = [
    {
      id: 1,
      serviceName: "Fast Delivery",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in omnis quaerat eligendi molestiae",
      img: choose1img,
      icon: icon1,
    },
    {
      id: 2,
      serviceName: "A Good Auto Responder",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in omnis quaerat eligendi molestiae",
      img: choose3img,
      icon: icon2,
    },
    {
      id: 3,
      serviceName: "Home Delivery",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in omnis quaerat eligendi molestiae",
      img: choose2img,
      icon: icon3,
    },
  ];
  return (
    <div className=" py-14 con container mx-auto px-4 md:px-0">
      <h2 className="text-4xl font-medium">Why you choose us</h2>
      <p className="md:w-2/5 my-6 text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in
        omnis quaerat eligendi molestiae ratione nesciunt assumenda voluptatum
        asperiores nam?
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {chooseUsData.map((item) => (
          <ChooseItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
