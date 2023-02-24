import React, { useState } from "react";
import style from "./ProductSection.module.css";
import Image from "next/image";
import productImg from "../../assets/img/product.webp";

function ProductSection(props) {
  return (
    <div className={style.container}>
      <div className={style.productWrapper}>
        <div className={style.productImg}>
          <Image src={productImg} alt="description of product" />
        </div>
        <div className={style.productDetail}>asd</div>
      </div>
    </div>
  );
}

export default ProductSection;
