import React from "react";
import order from "../assets/order1.jpg";

const Order = () => {
  return (
    <>
      <div className="order-item">
        <div className="order__img">
          <img src={order} width="232px" alt="order" />
        </div>
        <div className="order__text">
          <h2>Pizza with Peperoni</h2>
          <p>14-20 minutes</p>
          <p>$12</p>
          <button>+</button>
        </div>
      </div>
    </>
  );
};

export default Order;
