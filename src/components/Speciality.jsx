import React from "react";
import s1 from "../assets/images/s-img-1.jpg";
import s2 from "../assets/images/s-img-2.jpg";
import s3 from "../assets/images/s-img-3.jpg";
import s4 from "../assets/images/s-img-4.jpg";
import s5 from "../assets/images/s-img-5.jpg";
import s6 from "../assets/images/s-img-6.jpg";

const Speciality = () => {
  return (
    <section className="speciality" id="speciality">
      <h1 className="heading">
        our <span>speciality</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={s1} alt="" className="image" />
          <div className="content">
            <img src="./images/s-1.png" alt="" />
            <h3>tasty burger</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={s2} alt="" className="image" />
          <div className="content">
            <img src="./images/s-2.png" alt="" />
            <h3>tasty pizza</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={s3} alt="" className="image" />
          <div className="content">
            <img src="./images/s-3.png" alt="" />
            <h3>cold ice-cream</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={s4} alt="" className="image" />
          <div className="content">
            <img src="./images/s-4.png" alt="" />
            <h3>cold drinks</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={s5} alt="" className="image" />
          <div className="content">
            <img src="./images/s-5.png" alt="" />
            <h3>tasty sweets</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={s6} alt="" className="image" />
          <div className="content">
            <img src="./images/s-6.png" alt="" />
            <h3>healthy breakfast</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              eum numquam porro, animi impedit praesentium provident officiis
              aut commodi autem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
