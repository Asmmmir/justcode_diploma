import React from 'react'

const Search = () => {
  return (
    <div className="main__top">
    <div className="main__greetings">
      <h3 style={{ opacity: 0.5 }}>Hello John</h3>
      <h2>Welcome Back</h2>
    </div>
    <div className="main__search">
      <i className="fa fa-magnifying-glass"></i>
      <input type="text" placeholder="Search" />
    </div>
  </div>
  )
}

export default Search