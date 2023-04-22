import React, { useState } from 'react';

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='navigation'>
      <ul className='navigation-list'>
        <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
          <i className='fa fa-book-open fa-2x'></i>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <i className='fa fa-person fa-2x'></i>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <i className='fa fa-wallet fa-2x'></i>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
          <i className='fa fa-gear fa-2x'></i>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
          <i className='fa fa-envelope fa-2x'></i>
        </li>
        <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleItemClick(5)}>
          <i className='fa fa-chart-pie fa-2x'></i>
        </li>
        <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleItemClick(6)}>
          <i className='fa fa-message fa-2x'></i>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
