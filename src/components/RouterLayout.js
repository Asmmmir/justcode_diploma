import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import NavMenu from './NavMenu'
import OrderBar from './OrderBar'
import store from "../store/store";

const RouterLayout = () => {
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

  useEffect(() => {
    getProducts();
  });

  return (
    <Provider store={store}>
      <div id="app">
        <NavMenu />
        <div className="main">
          <Outlet />
        </div>
        <OrderBar />
      </div>
    </Provider>
  );
};

export default RouterLayout;
