import React from 'react'


const Order = (props) => {

  return (
    <div className="order__item">
    <div className="order__img">
      <img
        src={props.img}
        width="100%"
      />
    </div>
    <div className="order__info">
      <h3>{props.name}</h3>
      <p>{props.time}</p>
      <p>{props.price}</p>
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