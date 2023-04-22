import React from 'react'
import pizzaMenu from "../assets/pizza_menu.png";
import burgerMenu from "../assets/burger_menu.png";
import friesMenu from "../assets/fries_menu.png";
import packMenu from "../assets/pack_menu.png";


const OurMenu = () => {
  return (
    <div className="main__menu menu">
    <h3>Our Menu</h3>
    <div className="menu__pizza menu__item">
      <img src={pizzaMenu} alt="pizza" />
      <p>Pizza</p>
    </div>
    <div className="menu__burger menu__item">
      <img src={burgerMenu} alt="burger" />
      <p>Burger</p>
    </div>
    <div className="menu__fries menu__item">
      <img src={friesMenu} alt="french fries" />
      <p>Fries</p>
    </div>
    <div className="menu__pack menu__item">
      <img src={packMenu} alt="pack of food" />
      <p>Pack</p>
    </div>

    <h3 style={{ color: "orange" }}>See all</h3>
  </div>
  )
}

export default OurMenu