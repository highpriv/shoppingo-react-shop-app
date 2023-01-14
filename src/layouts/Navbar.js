import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
      <div className="bottomNavWrapper">
        <div className="logo">
          <a href="#home">
            <img
              src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
              alt="ShoppinGo Logo"
            />
          </a>
        </div>
        <div className="searchbar">
          <Autocomplete
            freeSolo
            className="inputSearch"
            size="small"
            disableClearable
            options={top100Films}
            PaperComponent={CustomPaper}
            renderOption={(props, option) => (
              <div className="searchAppend">
                <b>{option.title}</b>
              </div>
            )}
            renderInput={(params) => (
              <TextField
                className="searchField"
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
                }}
              />
            )}
          />
        </div>
        <div className="userActions">
          <span className="loginContainer">
            <PermIdentityIcon fontSize="medium" />
            <p>Giriş Yap</p>
          </span>
          <span className="favoritesContainer">
            <FavoriteBorderIcon fontSize="medium" />
            <p>Favorilerim</p>
          </span>
          <span className="shoppingCartContainer">
            <ShoppingCartOutlinedIcon fontSize="medium" />
            <p>Sepetim</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
