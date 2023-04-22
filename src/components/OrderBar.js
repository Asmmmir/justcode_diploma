import React, { useEffect } from "react";
import LoginInfo from "./LoginInfo";
import Order from "./Order";
import {useState} from 'react'
import { useSelector } from "react-redux";

const OrderBar = () => {
  
  const addedProducts = useSelector((state) => state.cart)


  const getOrderedProducts = async (id) => {
    const response = await fetch(`http://cepbep.ddns.net:2500/api/pizzaDB/products/${id}`)
    const data = await response.json()
    console.log(data);
  }
  
  getOrderedProducts()


  return (
    
    <div className="order-section">
      <LoginInfo />

      <div className="order__menu">
        <div className="order__menu-text">
          <h1>Order Menu</h1>
        </div>
        <div className="order__list">

        </div>
        <h1 className="order__total-price">Total price: $52.34</h1>
      </div>
    </div>
  );
};

export default OrderBar;
