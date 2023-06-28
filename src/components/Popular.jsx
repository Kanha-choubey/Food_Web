import React from "react";

import PopularItem from "../pages/PopularItem";

const Popular = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
      title: "Tasty Burger",
      price: 30,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://content3.jdmagicbox.com/comp/bhopal/h1/0755px755.x755.191120024541.f1h1/catalogue/vini-s-tasty-cakes-ayodhya-nagar-bhopal-bakeries-5km18iz8o3.jpg",
      title: "Tasty cake",
      price: 20,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5PtrNkshwbgEW6CrcBQlqctMPJpckCZjKw&usqp=CAU",
      title: "Tasty Snaks",
      price: 25,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image: "https://i.ytimg.com/vi/xrFZd54VFNE/maxresdefault.jpg",
      price: 19,
      title: "Tasty Cupckae",
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg",
      title: "Mango Juice",
      price: 20,
      count: 1,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
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
