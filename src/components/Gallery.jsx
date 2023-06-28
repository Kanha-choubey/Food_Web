import React from "react";
import g1 from "../assets/images/g-1.jpg";
import g2 from "../assets/images/g-2.jpg";
import g3 from "../assets/images/g-3.jpg";
import g4 from "../assets/images/g-4.jpg";
import g5 from "../assets/images/g-5.jpg";
import g6 from "../assets/images/g-6.jpg";
import g7 from "../assets/images/g-7.jpg";
import g8 from "../assets/images/g-8.jpg";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        our food <span>gallery</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={g1} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g2} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g3} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g4} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g5} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g6} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g7} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>

        <div className="box">
          <img src={g8} alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, animi!
            </p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
