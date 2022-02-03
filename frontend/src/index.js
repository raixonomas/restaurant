import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";

class Main extends React.Component {
  render() {
    return(
      <Router>
        <div className="navbar">
        <Navbar />
        </div>
        <div className="content">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


