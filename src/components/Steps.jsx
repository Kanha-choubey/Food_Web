import React from "react";
import image1 from "../assets/images/step-1.jpg";
import image2 from "../assets/images/step-2.jpg";
import image3 from "../assets/images/step-3.jpg";

const Steps = () => {
  return (
    <section className="steps">
      <div className="box">
        <img src={image1} alt="" />
        <h3>Choose your favorite food</h3>
      </div>

      <div className="box">
        <img src={image2} alt="" />
        <h3>free and fast delivery</h3>
      </div>

      <div className="box">
        <img src={image3} alt="" />
        <h3>Easy Payment methods</h3>
      </div>

      <div className="box">
        <img src={image1} alt="" />
        <h3>And finally enjoy your food</h3>
      </div>
    </section>
  );
};

export default Steps;
