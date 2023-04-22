import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";


const MenuList = () => {
  const products = useSelector(state => state.products)
  return (
    <div className="menu-list">
  {products && products.map((product) => (
        <MenuItem
         id= {product._id}
          name={product.name}
          time={product.time}
          price={product.price}
          size={product.size}
          img={product.photosURL}
        />
      ))} 
    </div>
  );
};

export default MenuList;
