import React from "react";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          our customers <span>review</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img1} alt="" />
            <h3>Ritika</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel
              natus eaque sit? Deserunt molestias fuga pariatur iure nam
              possimus.
            </p>
          </div>

          <div className="box">
            <img src={img2} alt="" />
            <h3>Jatin</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel
              natus eaque sit? Deserunt molestias fuga pariatur iure nam
              possimus.
            </p>
          </div>

          <div className="box">
            <img src={img3} alt="" />
            <h3>Akshita</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel
              natus eaque sit? Deserunt molestias fuga pariatur iure nam
              possimus.
            </p>
          </div>
        </div>
      </section>
      <h1 className="heading">
        <span>Order</span> now
      </h1>
    </>
  );
};

export default Review;
