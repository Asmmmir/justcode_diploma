import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import Footer from "./Footer";


const MenuList = () => {
  const products = useSelector(state => state.products.products)


  
  return (

        <div className="menu-list">
  {products && products.map((product) => (
        <MenuItem
        key={product._id}
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
