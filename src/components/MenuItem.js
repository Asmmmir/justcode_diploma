import React from "react";

const MenuItem = (props) => {
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
          <button className="menu__button">+</button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
