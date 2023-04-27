import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserInfo from "./UserInfo";

const User = () => {
  const loginInput = useRef();
  const passwordInput = useRef();

  const [error, setError] = useState("");
  const params = useParams()
  async function getUser() {

      const url = `http://cepbep.ddns.net:2500/api/hotelDB/users/login`;
      const data = {
        login: loginInput.current.value,
        password: passwordInput.current.value,
      };
      const response = await axios.post(url, data, {
        "Content-Type": "application/json",
      }).catch((error) => {
        if(error.status != 200) setError('Incorrect login or password')
      })
      localStorage.setItem("userId", response.data[0]._id);
      console.log(params);
      setError('')

  }
  

  const submitHandler = (e) => {
    e.preventDefault();
    getUser();
    loginInput.current.value = "";
    passwordInput.current.value = "";
  };

  const isLogged = JSON.stringify(localStorage.getItem("userId"));
  return (
    <div>
      {isLogged.length <= 4 ? (
        <form onSubmit={submitHandler} className="form-login">
          <label>Login</label>
          <input type="text" ref={loginInput} />
          <label>Password</label>
          <input type="password" ref={passwordInput} />
          <small style={{color:'red'}}>{error}</small>
          <button type="submit">Submit</button>
        </form>
      ) : (
       <UserInfo />
      )}
    </div>
  );
};

export default User;
