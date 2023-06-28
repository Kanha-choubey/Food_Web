import React from "react";
import { useDispatch } from "react-redux";
import { remove, plus } from "../features/CartSlice";

const CartItem = ({ cartItem }) => {
  const { count } = cartItem;

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="box-container b1">
      <div className="box">
        <span className="price">${cartItem.price}</span>
        <img className="pop" src={cartItem.image} alt="" />
        <h3>{cartItem.title}</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <a href="#" className="btn" onClick={() => handleRemove(cartItem.id)}>
          Remove
        </a>
        <div className="addbtn">
          <button
            className="btn add"
            onClick={() => {
              if (count > 1)
                dispatch(
                  plus({
                    ...cartItem,
                    count: count - 1,
                  })
                );
            }}
          >
            -
          </button>

          <span>{count}</span>
          <button
            className="btn add"
            onClick={() =>
              dispatch(
                plus({
                  ...cartItem,
                  count: count + 1,
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
