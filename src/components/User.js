import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const loginInput = useRef();
  const passwordInput = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.userReducer.id)

  async function getUser() {
    try {
      const url = `http://cepbep.ddns.net:2500/api/hotelDB/users/login`;
      const data = {
        login: loginInput.current.value,
        password: passwordInput.current.value,
      };
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("userId", response.data[0]._id);
      localStorage.setItem("userName", response.data[0].fullName);
      dispatch({type:"LOGIN_USER", id:localStorage.getItem("userId"), user:localStorage.getItem('userName') })
      setError("");
    } catch (error) {
      if (error.response.status !== 200) {
        setError("Incorrect login or password");
      }
    }

  
  }

  const submitHandler = (e) => {
    e.preventDefault();
    getUser();

  };


  return (
    <div>
      {!isLogged ? (
        <form onSubmit={submitHandler} className="form-login">
          <label>Login</label>
          <input type="text" ref={loginInput} />
          <label>Password</label>
          <input type="password" ref={passwordInput} />
          <small style={{ color: "red" }}>{error}</small>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <UserInfo />
      )}
    </div>
  );
};

export default User;