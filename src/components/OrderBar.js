import React, { useState } from "react";
import LoginInfo from "./LoginInfo";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { nanoid } from "nanoid";

const OrderBar = () => {
  let addedProducts = useSelector((state) => state.products.cart);
  const [showOrder,setShowOrder] = useState(false)

  const toggleOrder = (e) => {
    setShowOrder(!showOrder)
  }

  return (
    <>
      <div className={`order-section ${showOrder ? 'show' : '' }`}>
        <LoginInfo />

        <div className="order__menu">
          <div className="order__menu-text">
            <h1>Cart:</h1>
            <h2 style={{ color: "orange" }}>
              {addedProducts
                ? addedProducts
                    .map((product) => product.quantity)
                    .reduce((a, b) => a + b, 0)
                : 0}
            </h2>
            <i style={{color:'orange', opacity:'0.7'}} className="fa fa-cart-shopping fa-2x"></i>
          </div>
          <div className="order__list">
            {addedProducts
              ? addedProducts.map((cart) => (
                  <CartProduct key={nanoid()} id={cart.id} />
                ))
              : ""}
          </div>
          <h1 className="total__price">
            Total price:{" "}
            <span className="order__total-price">
              $
              {addedProducts
                ? addedProducts
                    .map((product) => product.price * product.quantity)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)
                : 0}
            </span>
          </h1>
        
        </div>
        <button className="buy-button">Buy</button>
      </div>
      <div onClick={toggleOrder} className={`burger-cart ${showOrder ? 'show' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
    </>
  );
};

export default OrderBar;
