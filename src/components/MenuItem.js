import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/store";
const MenuItem = (props) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className="menu-item">
        <div className="menu__img">
          <img src={props.img} width="200px" alt="order" />
        </div>
        <div className="menu__text">
          <h2 className="menu__name">{props.name}</h2>
          <p className="menu__prepare">{`${props.time} minutes`}</p>
          <p className="menu__price">{`$${props.price}`}</p>
          <button onClick={() => dispatch(addToCart(props.id))} className="menu__button">+</button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
