import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addToCart from "../store/action-creators/addToCart";
const Order = (props) => {
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(1);


  


  return (
    <div className="order__item">
      <div className="order__img">
        <img src={props.img} width="100rem" alt={props.name} />
      </div>
      <div className="order__info">
        <h3>{props.name}</h3>
        <p>{`${props.time} minutes`}</p>
        <p className="order__price">{`$${props.price}`}</p>
        <div className="order__amount">
          <button>-</button>
          <h4>1</h4>
          <button >+</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
