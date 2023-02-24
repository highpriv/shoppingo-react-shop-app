import React, { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import style from "./Orders.module.css";
import { SearchBar } from "../../components";

function Orders(props) {
  return (
    <div className={style.container}>
      <div className={style.searchMyOrders}>
        <div>
          <h2>Siparişlerim</h2>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <h2>Siparişlerim</h2>
        </div>
      </div>
    </div>
  );
}

export default Orders;
