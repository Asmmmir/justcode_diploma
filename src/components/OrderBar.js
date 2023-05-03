import React, { useState } from "react";
import LoginInfo from "./LoginInfo";
import CartOrders from "./CartOrders";
import { useSelector } from "react-redux";
import NavMenuMobile from "./NavMenuMobile";


const OrderBar = () => {
  const [showOrder,setShowOrder] = useState(false)
  let addedProducts = useSelector((state) => state.products.cart);
  const toggleOrder = (e) => {
    setShowOrder(!showOrder)
  }

  return (
    <>
      <div className={`order-section ${showOrder ? 'show' : '' }`}>
        <LoginInfo />
        <NavMenuMobile />
        {addedProducts ? <CartOrders /> : ''}
      </div>
      <div onClick={toggleOrder} className={`burger-cart ${showOrder ? 'show' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
    </>
  );
};

export default OrderBar;
