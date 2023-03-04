import React, { useState } from "react";
import style from "./Orders.module.css";
import { Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

function Orders(props) {
  return (
    <div className={style.container}>
     <div className={style.topDetails}>
      <div className={style.orderDate}>
        <span className={style.bold}>Sipariş Tarihi</span>
        <span>1 Mart 2023 - 22:12</span>
      </div>
      <div className={style.customerDetails}>
        <span className={style.bold}>Alıcı</span>
        <span>Canberk Beren</span>
      </div>
      <div className={style.price}>
        <span className={style.bold}>Fiyat</span>
        <span className={style.orange}>300TL</span>
      </div>
      <div className={style.detailButton}>
        <Button variant="contained" color="warning" size="small">Sipariş Detayı</Button>
      </div>
     </div>
     <div className={style.productDetail}>
      <div className={style.deliveryDetails}>
        <span className={style.green}><DoneIcon className={style.doneIcon} /><p> Teslim Edildi</p></span>
        <span className={style.deliveryText}>Bu ürün 1 Mart tarihinde teslim edilmiştir.</span>
      </div>
      <div className={style.productImg}>
        <img src="https://cdn.dsmcdn.com/ty611/product/media/images/20221124/13/220601209/588689826/1/1_org.jpg" />
      </div>
      <div className={style.returnProduct}>
        <Button variant="outlined" color="warning" size="small">İade Talebi</Button>
      </div>
     </div>
    </div>
  );
}

export default Orders;
