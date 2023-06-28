import React, { useState } from "react";
import order from "../assets/images/order-img.jpg";
import { Link } from "react-router-dom";

const OrderSection = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setText(window.alert("Your Order has been placed successfully."));
  };

  return (
    <section className="order" id="order">
      <div className="row">
        <div className="image">
          <img src={order} alt="" />
        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="name" required />
            <input type="email" placeholder="email" />
          </div>

          <div className="inputBox">
            <input type="number" placeholder="number" required />
            <input type="text" placeholder="food name" />
          </div>

          <textarea
            placeholder="address"
            name=""
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>

          <Link to="/">
            <button
              type="submit"
              className="btn"
              onClick={handleSubmit}
              value={text}
            >
              Order Now
            </button>{" "}
          </Link>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
