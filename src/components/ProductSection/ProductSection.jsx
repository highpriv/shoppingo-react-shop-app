import React, { useState, useEffect } from "react";
import style from "./ProductSection.module.css";
import Image from "next/image";
import productImg from "../../assets/img/product.webp";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

function ProductSection(props) {
  const [detailsVisible, setDetailsVisible] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAllButton, setShowAllButton] = useState('Hepsini Göster');

  const detailList = [
    "15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.",
    "ORİJİNAL PELLA BEZ ÖZELLİKLERİ",
    "Pella bezler leke tutmaz, antibakteriyeldir, koku yapmaz.",
    "Silin ve geçin! Çizmez, iz, leke ve toz bırakmaz kurulama gerektirmez.",
    "Boyutları 40x60 cm’dir. Ele kolayca kavranır.",
    "Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.",
    "Bezlerin üçüde aynı işlevi görmektedir. Renkler, temizlik alanlarının ayrılması içindir.",
  ];

  const detailParser = () => {
    if (detailList.length > visibleCount) {
      let visible = detailList.slice(0, visibleCount);
      setDetailsVisible(visible);
      setShowAllButton('Hepsini Göster');
    }
  };

  useEffect(() => {
    detailParser();
  }, []);

  const changeVisibleDetails = () => {
    detailsVisible.length === detailList.length ?     detailParser():  setDetailsVisible(detailList) & setShowAllButton('Gizle');
 };

  return (
    <div className={style.container}>
      <div className={style.productWrapper}>
        <div className={style.productImg}>
          <Image src={productImg} alt="description of product" />
        </div>
        <div className={style.productDetail}>
          <div className={style.productName}>
            <p>
              rise and shine Antiperspirant Whitening Roll-on - 75 ml RS0052
            </p>
          </div>
          <div className={style.sellerName}>
            <p>
              Satıcı: <a href="#">Rise and Shine</a>
            </p>
          </div>
          <div className={style.ratingSection}>
            <div className={style.ratingStars}>
              <StarIcon sx={{ fontSize: 18, color: "#F8C858" }} />
              <StarIcon sx={{ fontSize: 18, color: "#F8C858" }} />
              <StarIcon sx={{ fontSize: 18, color: "#F8C858" }} />
              <StarIcon sx={{ fontSize: 18, color: "#F8C858" }} />
              <StarIcon sx={{ fontSize: 18, color: "#F8C858" }} />
            </div>
            <div className={style.rateCount}>1535 Değerlendirme</div>
          </div>
          <div className={style.price}>139 TL</div>
          <div className={style.actions}>
            <Button
              variant="contained"
              disableElevation
              sx={{ backgroundColor: "#F69452" }}
              className={style.buyButton}
            >
              Sepete Ekle
            </Button>
            <Button sx={{ color: "#F69452" }}>
              <FavoriteBorderIcon />
            </Button>
          </div>
          <ul className={style.productDetail}>
            {detailsVisible.map((detail, index) => {
              return <li>{detail}</li>;
            })}
          </ul>
          <div>
          <Button onClick={changeVisibleDetails} variant="outlined" className={style.showAllButton}>{showAllButton}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
