import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const user = useSelector((state) => state.userReducer.user)
  return (
    <div className="login__card">
    <div className="bank-name">
      <p>Universal Card</p>
      <div className="bank-icon"></div>
    </div>
    <p style={{ textAlign: "center" }}>**** **** **** 5454</p>

    <div className="card__info">
      <p>{user}</p>
      <p>12/24</p>
    </div>
  </div>
  )
}

export default Balance