import React from "react";

import PopularItem from "../pages/PopularItem";

const Popular = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-1.jpg",
      title: "Tasty Burger",
      price: 30,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-2.jpg",
      title: "Tasty cake",
      price: 20,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-3.jpg",
      title: "Tasty Snaks",
      price: 25,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-4.jpg",
      price: 19,
      title: "Tasty Cupckae",
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-5.jpg",
      title: "Mango Juice",
      price: 20,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "./src/assets/images/p-6.jpg",
      title: "Ice-cream",
      price: 10,
      count: 1,
    },

    {
      id: crypto.randomUUID(),
      image:
        "https://media.gettyimages.com/id/676294571/photo/indian-food.jpg?s=612x612&w=0&k=20&c=UAcZ11oPIbnwX-BzRxKaGhv7oUfFT-6vWDlvIn01nQs=",
      title: "Butter Paratha",
      price: 20,
      count: 1,
    },

    {
      id: crypto.randomUUID(),
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nes3txznzu6kzwthhy3e",
      title: "Laccha Paratha",
      price: 35,
      count: 1,
    },

    {
      id: crypto.randomUUID(),
      image:
        "http://lh3.googleusercontent.com/DBDU-r_yg-_5yapA_UNy6RhZQWmd7jEAEpF8BVCJZGWSWhg-SHk85RDpAUv_jECrQhhXEG3_gBDicf8kd2CkGMq7CQ=s750",
      title: "Shahi Paratha",
      price: 20,
      count: 1,
    },
  ];

  return (
    <>
      <h1 className="heading">
        most <span>popular </span> foods
      </h1>
      <section className="popular" id="popular">
        {data.map((popularData) => (
          <PopularItem key={popularData.id} popularData={popularData} />
        ))}
      </section>
    </>
  );
};

export default Popular;
