import React from "react";
import LoginInfo from "./LoginInfo";
import Order from "./Order";

const OrderBar = () => {
  return (
    <div className="order-section">
      <LoginInfo />

      <div className="order__menu">
        <div className="order__menu-text">
          <h1>Order Menu</h1>
        </div>
        <div className="order__list">
          <Order />
        </div>
        <h1 className="order__total-price">Total price: $52.34</h1>
      </div>
    </div>
  );
};

export default OrderBar;
