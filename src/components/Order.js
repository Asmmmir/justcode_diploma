import React from 'react'
import store from '../store/store';

const Order = () => {
  return (
    <div className="order__item">
    <div className="order__img">
      <img
        src="https://sushinson.ru/assets/catalog-img/pizza/picca_pepperoni.jpg"
        width="100%"
      />
    </div>
    <div className="order__info">
      <h3>Pizza with Mushrooms</h3>
      <p>12 minutes</p>
      <p>$12</p>
      <div className="order__amount">
        <button>-</button>
        <h4>01</h4>
        <button>+</button>
      </div>
    </div>
  </div>
  )
}

export default Order