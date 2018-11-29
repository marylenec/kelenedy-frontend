import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

  const cartCount = props.cartCount.length === 0 ? null : props.cartCount.length

  return (
  <div className="navbar">
    <NavLink exact to="/" >KELENEDY COSMETICS</NavLink>
    <NavLink exact to="/shop" >SHOP</NavLink>
    <NavLink exact to="/cart" activeStyle={{
        textDecoration: 'underline'
      }}><i className="fa fa-shopping-cart"/><span className="cartCount">{cartCount}</span></NavLink>
    <NavLink exact to="/login" >
      <span className="login">LOG IN</span>
    </NavLink>
  </div>
)
}
export default NavBar;
