import React from 'react'
import loginImg from "../assets/login_img.jpg";

const LoginInfo = () => {
  return (
    <div className="order__login login">
    <div className="login__user">
      <div className="user__info">
        <img src={loginImg} />
        <h3>John Smith</h3>
      </div>
      <i className="fa fa-bell fa-2x"></i>
    </div>
    <div className="login__card">
      <div className="bank-name">
        <p>Universal Card</p>
        <div className="bank-icon"></div>
      </div>
      <p style={{ textAlign: "center" }}>**** **** **** 5454</p>

      <div className="card__info">
        <p>John Smith</p>
        <p>12/24</p>
      </div>
    </div>
  </div>
  )
}

export default LoginInfo