import React from "react";
import LoginInfo from "./LoginInfo";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { nanoid } from "nanoid";


const OrderBar = () => {
  let addedProducts = useSelector((state) => state.products.cart);
  console.log(addedProducts);
  return (
    <div className="order-section">

      <LoginInfo />
      
      <div className="order__menu">
        <div className="order__menu-text">
          <h1>Cart:</h1>
          <h2 style={{ color: "orange" }}>{addedProducts ? addedProducts.map((product) => product.quantity).reduce((a, b) => a + b, 0) : 0}</h2>
          <i className="fa fa-cart-shopping fa-2x"></i>
        </div>
        <div className="order__list">
          {addedProducts
            ? addedProducts.map((cart) => <CartProduct key={nanoid()} id={cart.id} />)
            : ""}
        </div>
        <h1>
          Total price: <span className="order__total-price">${addedProducts ? addedProducts.map((product) => product.price * product.quantity).reduce((a, b) => a + b, 0).toPrecision(3): 0}</span>
        </h1>
      </div>
    </div>
  );
};

export default OrderBar;
