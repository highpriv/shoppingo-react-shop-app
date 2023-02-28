import React from "react";
import style from "./Navbar.module.css";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];

const CustomPaper = (props) => {
  return (
    <Paper
      {...props}
      sx={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        border: "2px solid #F27919",
        padding: "10px",
      }}
    />
  );
};

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
        <div className={style.searchbar}>
          <Autocomplete
            freeSolo
            className={style.inputSearch}
            size="small"
            disableClearable
            options={top100Films}
            PaperComponent={CustomPaper}
            renderOption={(props, option) => (
              <div className={style.searchAppend}>
                <b>{option.title}</b>
              </div>
            )}
            renderInput={(params) => (
              <TextField
                className={style.searchField}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#f27919",
                      borderBottomWidth: 0,
                      padding: "10px",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  },
                }}
                placeholder="Search an item, category or brand"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon fontSize="medium" sx={{ color: "#F27919" }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className={style.userActions}>
          <a className={style.loginContainer} href="/login">
            <PermIdentityIcon fontSize="medium" />
            <p>Giriş Yap</p>
          </a>
          <a className="favoritesContainer" href="">
            <FavoriteBorderIcon fontSize="medium" />
            <p>Favorilerim</p>
          </a>
          <a className={style.shoppingCartContainer} href="/">
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
};

export default Navbar;
