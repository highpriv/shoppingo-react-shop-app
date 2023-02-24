import React from "react";
import style from "./Product.module.css";
import Navbar from "../../layouts";
import { ProductSection } from "../../components";

function Product() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <ProductSection />
      </div>
    </div>
  );
}

export default Product;
