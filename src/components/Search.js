import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const inputSearch = useRef();
  const dispatch = useDispatch()
  const name = useSelector((state) => state.userReducer.user)

  const searchProduct = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `http://cepbep.ddns.net:2500/api/pizzaDB/products/searchProducts/${inputSearch.current.value}`
    );
    const data = await response.json();
    dispatch({type:'SET_PRODUCTS', products: data})
  };

  return (
    <div className="main__top">
      <div className="main__greetings">
        <h3 style={{ opacity: 0.5 }}>Hello {name ? name : 'User'}</h3>
        <h2>Welcome Back</h2>
      </div>
      <div className="main__search">
        <i className="fa fa-magnifying-glass fa-2x"></i>
        <form onSubmit={searchProduct}>
          <input type="text" placeholder="Search" ref={inputSearch} />
        </form>
      </div>
    </div>
  );
};

export default Search;
