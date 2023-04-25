import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul className="navigation-list">
        <Link to='/'>
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            <i className="fa fa-book-open fa-2x"></i>
          </li>
        </Link>
        <Link to='user'>
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleItemClick(1)}
        >
          <i className="fa fa-person fa-2x"></i>
        </li>
        </Link>
        <Link to='balance'>
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleItemClick(2)}
        >
          <i className="fa fa-wallet fa-2x"></i>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
