import React from "react";
import CartItem from "../pages/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((p, c) => {
    return p + c.price * c.count;
  }, 0);

  // const charges = cart.filter(item => item.price<15? deliveryCharge == 10 :15)

  if (!cart || cart.length == 0) {
    return (
      <h1
        className="heading"
        style={{ marginTop: "200px", marginBottom: "160px" }}
      >
        No items in your <span>cart </span>...
      </h1>
    );
  }

  return (
    <>
      <h1 className="heading" style={{ marginTop: "70px" }}>
        Your <span>cart </span>items
      </h1>

      <div className="CARTSEC">
        <h1>
       
          <b> Cart Amount : (${total}) </b>{" "}
        </h1>
        <h1>
        
          <b> delivery charges : ($15) </b>{" "}
        </h1>
        <h1>
         
          <b> Total Amount : (${total + 15}) </b>{" "}
        </h1>
      </div>
      <section className="popular p1" id="popular">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}

      </section>
        <button>Clear Cart</button>
    </>
  );
};

export default Cart;
