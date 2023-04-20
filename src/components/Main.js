import React, { useEffect } from "react";
import OrderList from "./OrderList";
import Search from "./Search";
import News from "./News";
import OurMenu from "./OurMenu";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <News />
      <OurMenu />
      <OrderList />
    </div>
  );
};

export default Main;
