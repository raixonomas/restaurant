import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './navbar.css'

function Location(path) {
  const location = useLocation();
  if(location.pathname === path){
    return { color : "#1fa2f1"}
}
}

const navbar = ({ history }) => {
  return (
  <div className='wrapper'>
    <ul>
    <li>
      <Link style={Location("/")} to="/">Home</Link>
    </li>
    <li>
      <Link style={Location("/menu")} to="/menu">Menu</Link>
    </li>
    <li>
      <Link style={Location("/about")} to="/about">About</Link>
    </li>
    </ul>
  </div>
  );
}
export default navbar;