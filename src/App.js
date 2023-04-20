import React, {useEffect} from "react";
import Main from "./components/Main";
import NavMenu from "./components/NavMenu";
import OrderBar from "./components/OrderBar";

const App = () => {



  return (
    <div id='app'>
      <NavMenu />
      <Main />
      <OrderBar />
    </div>
  );
};

export default App;
