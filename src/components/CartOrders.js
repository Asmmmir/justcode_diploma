import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Button = styled.button`
  background: rgba(255, 153, 33, 1);
  border: none;
  width: 12rem;
  height: 4rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 144.69%;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

const CartOrders = () => {
  let addedProducts = useSelector((state) => state.products.cart);
  return (
    <>
      <div className="order__menu">
        <div className="order__menu-text">
          <h1>Cart:</h1>
          <h2 style={{ color: "orange" }}>
            {addedProducts
              ? addedProducts
                  .map((product) => product.quantity)
                  .reduce((a, b) => a + b, 0)
              : 0}
          </h2>
          <i
            style={{ color: "orange", opacity: "0.7" }}
            className="fa fa-cart-shopping fa-2x"
          ></i>
        </div>
        <div className="order__list">
          {addedProducts
            ? addedProducts.map((cart) => (
                <CartProduct key={nanoid()} id={cart.id} />
              ))
            : ""}
        </div>
        <h1 className="total__price">
          Total price:{" "}
          <span className="order__total-price">
            $
            {addedProducts
              ? addedProducts
                  .map((product) => product.price * product.quantity)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)
              : 0}
          </span>
        </h1>
      </div>
      {addedProducts.length === 0 ? (
        ""
      ) : (
      <Button>Buy</Button>
      )}
    </>
  );
};

export default CartOrders;
