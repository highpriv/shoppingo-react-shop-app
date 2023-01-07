import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container-header">
      <ul className="top-menu">
        <li>
          <a href="#coupons">Coupons</a>
        </li>
        <li>
          <a href="#be-a-seller">Be A Seller</a>
        </li>
        <li>
          <a href="#support">Help & Support</a>
        </li>
      </ul>
      <div className="navbar">
        <a href="#home">
          <img src={logo} alt="ShoppinGo Logo" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
