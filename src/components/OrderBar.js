import React from "react";
import LoginInfo from "./LoginInfo";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";


const OrderBar = () => {
  let addedProducts = useSelector((state) => state.products.cart);
  let totalAmount = useSelector((state) => state.products.prices)

  return (
    <div className="order-section">

      <LoginInfo />

      <div className="order__menu">
        <div className="order__menu-text">
          <h1>Cart:</h1>
          <h2 style={{ color: "orange" }}>{addedProducts ? addedProducts.length : 0}</h2>
        </div>
        <div className="order__list">
          {addedProducts
            ? addedProducts.map((id) => <CartProduct key={id} id={id} />)
            : ""}
        </div>
        <h1>
          Total price: <span className="order__total-price">${totalAmount ? totalAmount.reduce((acc,item) => acc + item,0).toPrecision(3) : 0}</span>
        </h1>
      </div>
    </div>
  );
};

export default OrderBar;
