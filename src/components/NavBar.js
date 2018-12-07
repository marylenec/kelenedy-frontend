import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {

  const cartCount = props.cartCount.length === 0 ? null : props.cartCount.length

  return (

  <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
  <ul className="nav navbar-nav">
    <li><NavLink exact to="/" >KELENEDY COSMETICS</NavLink></li>
    <li><NavLink exact to="/shop" >SHOP</NavLink></li>
    </ul>
  <ul className="nav navbar-nav navbar-right">
    <li><NavLink exact to="/cart" activeStyle={{
        textDecoration: 'underline'
      }}><i className="fa fa-shopping-cart"/><span className="cartCount">{cartCount}</span></NavLink></li>
    
    </ul>
    </div>
    </nav>

)
}
export default NavBar;
