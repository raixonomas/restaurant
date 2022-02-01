import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/menu">Menu</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </div>
  );
}
export default navbar;