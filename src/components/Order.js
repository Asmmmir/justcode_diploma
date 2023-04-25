import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Order = (props) => {

  const [countOfProduct, setCountOfProduct] = useState(1)

  const increaseProduct = () => {
    setCountOfProduct((prevState) => prevState + 1 )
  }
  
  const decreaseProduct = () => {
    setCountOfProduct((prevState) => prevState - 1 )
  }

  

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
          <button onClick={decreaseProduct}>-</button>
          <h4>{countOfProduct}</h4>
          <button onClick={increaseProduct}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
