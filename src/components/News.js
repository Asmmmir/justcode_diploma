import React from 'react'
import newsPizza from "../assets/pizzaMain.png";

const News = () => {
  return (
  
    <div className="main__news news">
    <div className="news__text">
      <h1>
        Make Your First Order and Get <span>50% Off</span>
      </h1>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a
        typeface without.
      </p>
      <button>Order Now</button>
    </div>

    <div className="news__img">
      <img src={newsPizza} width="100%" alt="news" />
    </div>
  </div>
  )
}

export default News