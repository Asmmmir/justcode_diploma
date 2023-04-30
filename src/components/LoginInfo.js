import React, { useEffect, useState } from 'react'
import loginImg from "../assets/login_img.png";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const LoginInfo = () => {
 const userSelector = useSelector((state) => state.userReducer.user)
 const dispatch = useDispatch()



const logOut = () => {
  localStorage.removeItem('userId')
  localStorage.removeItem('userName')
  dispatch({type:'LOGOUT_USER'})
}

  return (
    <div className="order__login login">
    <div className="login__user">
      <div className="user__info">
        <img src={loginImg} width='50px' />
        <h3>{userSelector ? userSelector : ''}</h3>
      </div>
      <button onClick={logOut} className='login__logout'>
      <i className="fa fa-right-from-bracket fa-2x"></i>
      </button>
     
    </div>
    {/* <div className="login__card">
      <div className="bank-name">
        <p>Universal Card</p>
        <div className="bank-icon"></div>
      </div>
      <p style={{ textAlign: "center" }}>**** **** **** 5454</p>

      <div className="card__info">
        <p>{userSelector}</p>
        <p>12/24</p>
      </div>
    </div> */}
  </div>
  )
}

export default LoginInfo