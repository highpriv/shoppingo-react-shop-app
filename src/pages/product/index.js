import React from "react";
import style from "./Product.module.css";
import Navbar from "../../layouts";
import { ProductSection, CommentsSection, Carousel } from "../../components";

function Product() {
  return (
    <div>
      <div className={style.container}>
        <ProductSection />

        <div className={style.similarProducts}>
        <h3>Beğenebileceğiniz Ürünler</h3>
          <Carousel />
          </div>

        <div className={style.commentsArea}>
        <h3>Ürün Değerlendirmeleri</h3>
          <CommentsSection />
        </div>

      </div>
    </div>
  );
}

export default Product;
