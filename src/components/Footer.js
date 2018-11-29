import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white'
}

const Footer = () =>
  <div className="footer">
    <NavLink exact to="/" style={link} activeStyle={{
        color: 'gray'
      }}>Home</NavLink>
    <NavLink exact to="/cart" style={link} activeStyle={{
        color: 'gray'
      }}>Cart</NavLink>
  </div>

export default Footer;
