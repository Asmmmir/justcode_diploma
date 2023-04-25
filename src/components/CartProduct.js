import React, { useState } from "react";
import { useEffect } from "react";
import Order from "./Order";
import { nanoid } from "nanoid";

const CartProduct = (props) => {
  const [order, setOrder] = useState([]);

  const getOrderedProducts = async (id) => {
    const response = await fetch(
      `http://cepbep.ddns.net:2500/api/pizzaDB/products/${id}`
    );
    const data = await response.json();
    setOrder(data);
  };

  useEffect(() => {
    getOrderedProducts(props.id);
  
  },[]);

  return (
    <div>
      {order
        ? order.map((item) => (
            <Order
              key={nanoid()}
              id={item._id}
              name={item.name}
              time={item.time}
              img={item.photosURL}
              price={item.price}
            />
          ))
        : []}
    </div>
  );
};

export default CartProduct;
