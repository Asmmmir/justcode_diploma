import React from 'react'
import newsPizza from "../assets/pizzaMain.png";
import styled from 'styled-components';

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
      <Button>Order Now</Button>
    </div>

    <div className="news__img">
      <img src={newsPizza} width="100%" alt="news" />
    </div>
  </div>
  )
}

export default News