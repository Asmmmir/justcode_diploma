import React from "react";
import Search from "./Search";
import News from "./News";
import MenuList from "./MenuList";
import OurMenu from "./OurMenu";

const Main = () => {

  return (
    <div className="main">
      <Search />
      <News />
      <OurMenu />
      <MenuList />
    </div>
  );
};

export default Main;
