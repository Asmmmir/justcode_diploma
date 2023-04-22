import React, { useEffect } from "react";
import Main from "./components/Main";
import NavMenu from "./components/NavMenu";
import OrderBar from "./components/OrderBar";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const getProducts = async () => {
    try {
      const url = "http://cepbep.ddns.net:2500/api/pizzaDB/products/";
      const response = await fetch(url);
      const data = await response.json();
      store.dispatch({ type: "SET_PRODUCTS", payload: data });
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
        <Main />
        <OrderBar />
      </div>
    </Provider>
  );
};

export default App;
