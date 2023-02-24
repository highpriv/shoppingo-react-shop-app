import React from "react";
import style from "./Navbar.module.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SearchBar } from "../../components";

function Navbar() {
  return (
    <div className={style.containerHeader}>
      <ul className={style.topMenu}>
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
      <div className={style.bottomNavWrapper}>
        <div className={style.logo}>
          <a href="#home">
            <img
              src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
              alt="ShoppinGo Logo"
            />
          </a>
        </div>

        <SearchBar />

        <div className={style.userActions}>
          <a className={style.loginContainer} href="">
            <PermIdentityIcon fontSize="medium" />
            <p>Giriş Yap</p>
          </a>
          <a className="favoritesContainer" href="">
            <FavoriteBorderIcon fontSize="medium" />
            <p>Favorilerim</p>
          </a>
          <a className={style.shoppingCartContainer} href="">
            <ShoppingCartOutlinedIcon fontSize="medium" />
            <p>Sepetim</p>
          </a>
        </div>
      </div>
      <div className={style.categoriesNav}>
        <ul className={style.categoryItems}>
          <li>
            <a href="#home">Wowan</a>
          </li>
          <li>
            <a href="#news">Man</a>
          </li>
          <li>
            <a href="#contact">Mother & Child</a>
          </li>
          <li>
            <a href="#about">Home & Furniture</a>
          </li>
          <li>
            <a href="#about">Supermarket</a>
          </li>
          <li>
            <a href="#about">Shoes</a>
          </li>
          <li>
            <a href="#about">Bags</a>
          </li>
          <li>
            <a href="#about">Watch</a>
          </li>
          <li>
            <a href="#about">Electronical</a>
          </li>
          <li>
            <a href="#about">Outdoor</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
