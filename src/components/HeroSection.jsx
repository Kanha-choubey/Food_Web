import React from "react";
import homeImage from "../assets/images/home-img.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Food made with love</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam
          suscipit nemo, natus assumenda, similique placeat illo distinctio
          exercitationem ea, mollitia officiis nulla vel iure illum aliquid
          eaque et accusamus?
        </p>
        <Link to="/" className="btn">
          order now
        </Link>
      </div>

      <div className="image">
        <img src={homeImage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
