import React from "react";
import loginImg from "../assets/login_img.jpg";

const OrderBar = () => {
  return (
    <div className="order-section">
      <div className="order__login login">
        <div className="login__user">
          <div className="user__info">
            <img src={loginImg} />
            <h3>John Smith</h3>
          </div>
          <i className="fa fa-bell fa-2x"></i>
        </div>
        <div className="login__card">
          <p style={{ textAlign: "center" }}>sdfdf</p>
        </div>
      </div>

      <div className="order__menu">
        <h1>Order Menu</h1>
        <p>See All</p>
      </div>
    </div>
  );
};

export default OrderBar;
