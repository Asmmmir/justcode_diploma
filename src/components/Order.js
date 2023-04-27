import React from "react";
import { quantityIncrement, quantityDecrement } from "../store/action-creators/quantityCreator";
import { useDispatch,useSelector } from "react-redux";

const Order = (props) => {




  
  const product = useSelector(state => state.products.cart.find(p => p.id === props.id));
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(quantityIncrement(props.id));
  };

  const handleDecrement = () => {
    dispatch(quantityDecrement(props.id));
  };

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
          <button onClick={handleDecrement}>-</button>
          <h4>{product.quantity}</h4>
          <button  onClick={handleIncrement} >+</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
