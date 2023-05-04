import axios from "axios";
import React, { useEffect, useState } from "react";
import loginImg from "../assets/login_img.png";

const UserInfo = () => {
  const [user, setUser] = useState([]);

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

  return (
    <div className="profile-info">
      <div className="profile-card">
        <div className="profile__image">
          <img src={loginImg} width="50px" alt="avatar" />
        </div>
        <div className="profile__info">
          <p><b>{user.fullName ? 'Full name:' : 'Login:'}</b> {user.fullName ? user.fullName : user.login}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b>  {user.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
