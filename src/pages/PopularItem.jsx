import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, plus } from "../features/CartSlice";

const PopularItem = ({ popularData }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAdd = (popularData) => {
    let x = cart.filter((item) => item.id === popularData.id);
    if (x.length) {
      dispatch(
        plus({
          ...popularData,
          count: x[0].count + 1,
        })
      );
      x = [];
    } else {
      dispatch(add(popularData));
    }
  };

  return (
    <div className="box-container">
      <div className="box">
        <span className="price">${popularData.price}</span>
        <img className="pop" src={popularData.image} alt="" />
        <h3>{popularData.title}</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <button className="btn" onClick={() => handleAdd(popularData)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PopularItem;
