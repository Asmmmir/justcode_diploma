import React, { useEffect, useState } from 'react'
import loginImg from "../assets/login_img.png";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const LoginInfo = () => {
 const userSelector = useSelector((state) => state.userReducer.user)
 const dispatch = useDispatch()
const [user, setUser] = useState('')
 
 const getUser = async () => {
  const userId = localStorage.getItem("userId");
  const response = await axios.get(
    `http://cepbep.ddns.net:2500/api/hotelDB/users/${userId}`
  );
  setUser(response.data);
};

useEffect(() => {
  getUser();
}, []);


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
        <h3>{userSelector ? userSelector : user.login}</h3>
      </div>
      <button onClick={logOut} className='login__logout'>
      <i className="fa fa-right-from-bracket fa-2x"></i>
      </button>
     
    </div>
  </div>
  )
}

export default LoginInfo