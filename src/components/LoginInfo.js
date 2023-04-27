import React, { useEffect, useState } from 'react'
import loginImg from "../assets/login_img.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LoginInfo = () => {
let [user,setUser] = useState('')

const getFullName =  async () => {
  const user = localStorage.getItem('userId')
  const url = `http://cepbep.ddns.net:2500/api/hotelDB/users/${user}`
  const response = await axios.get(url)
  setUser(response.data.fullName)
}

const logOut = () => {
  localStorage.removeItem('userId')
}


useEffect(() => {
  getFullName()
},[])


  return (
    <div className="order__login login">
    <div className="login__user">
      <div className="user__info">
        <img src={loginImg} width='50px' />
        <h3>{user}</h3>
      </div>
      <button onClick={logOut} className='login__logout'>
      <i className="fa fa-right-from-bracket fa-2x"></i>
      </button>
     
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