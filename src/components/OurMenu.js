import React, { useState } from 'react'
import pizzaMenu from "../assets/pizza_menu.png";
import burgerMenu from "../assets/burger_menu.png";
import friesMenu from "../assets/fries_menu.png";
import packMenu from "../assets/pack_menu.png";
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';


const OurMenu = () => {
  const dispatch = useDispatch()
  const seeAll = useSelector((state) => state.products.products)
  console.log(seeAll);

  const filterByName = async (type) => {
    const response = await fetch(`http://cepbep.ddns.net:2500/api/pizzaDB/products/category/${type}`)
    const data = await response.json()
    dispatch({type:'SET_PRODUCTS', products: data})
  }

  const getProducts = async () => {
    try {
      const url = "http://cepbep.ddns.net:2500/api/pizzaDB/products/";
      const response = await fetch(url);
      const data = await response.json();
      store.dispatch({ type: "SET_PRODUCTS", products: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  


  return (
    <div className="main__menu menu">
    <h3>Our Menu</h3>
    <div onClick={() => filterByName('pizza')} className="menu__pizza menu__item">
      <img src={pizzaMenu} alt="pizza" />
      <p>Pizza</p>
    </div>
    <div onClick={() => filterByName('burger')} className="menu__burger menu__item">
      <img src={burgerMenu} alt="burger" />
      <p>Burger</p>
    </div>
    <div onClick={() => filterByName('fries')}  className="menu__fries menu__item">
      <img src={friesMenu} alt="french fries" />
      <p>Fries</p>
    </div>
    <div onClick={() => filterByName('pack')}  className="menu__pack menu__item">
      <img src={packMenu} alt="pack of food" />
      <p>Pack</p>
    </div>
    <div className='menu__item'>
    <h3 onClick={getProducts} style={{ color: "orange"}}>See all</h3>

    </div>

  </div>
  )
}

export default OurMenu