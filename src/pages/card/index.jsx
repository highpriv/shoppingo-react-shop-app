import styles from "./Card.module.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

export default function Card() {
  return (
    <div className={styles.sectionWrap}>
            <div className={styles.wrapperAuth}>
      <div className={styles.titleHead}>
          <h2>Sepetim (1 Ürün)</h2>
        </div>
        <div className={styles.loginInfo}>
          <span>
            <PermIdentityIcon />
          </span>
          <span>
            Alışverişini daha hızlı tamamlamak için <a href="">giriş yap.</a>
          </span>
        </div>
      </div>
    <div className={styles.wrapperCard}>
      <div className={styles.allItems}>
      <div className={styles.containerMain}>
        <div className={styles.productCard}>
          <div className={styles.sellerInfo}>
            <span>
              Satıcı: <b>40sans</b>
            </span>
            <span className={styles.sellerPoint}>7.2</span>
          </div>
          <div className={styles.freeDelivery}>
            <LocalShippingIcon color="success" /> <b>Ücretsiz Teslimat!</b>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productImg}>
              <img src="https://cdn.dsmcdn.com/ty750/product/media/images/20230227/18/291397435/149248821/1/1_org_zoom.jpg" />
            </div>
            <div className={styles.productName}>
              <span>
                <b>Puremed</b> 60x90 Cm Kedi Köpek Çiş Pedi 30 adet
              </span>
              <span>Tahmini kargoya teslim: 2 gün sonra</span>
            </div>
            <div className={styles.productAmount}>
              <span>
                <IconButton aria-label="delete" size="medium">
                  <AddIcon fontSize="medium" />
                </IconButton>
              </span>
              <h2>1</h2>
              <span>
                <IconButton aria-label="delete" size="medium">
                  <RemoveIcon fontSize="medium" />
                </IconButton>
              </span>
            </div>
            <div className={styles.price}>200TL</div>
            <div className={styles.deleteItem}>
              <IconButton aria-label="delete" size="medium">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
      <div className={styles.totalAmountSide}>
        <div className={styles.summeryOrder}>
          <h3>Sipariş Özeti</h3>
          <div>
            <span>Ürünün Toplamı</span>
            <span>200TL</span>
          </div>
          <div>
            <span>Kargo Toplamı</span>
            <span>20TL</span>
          </div>
          <div>
            <span>Kargo Bedava</span>
            <span>-20TL</span>
          </div>
          <div className={styles.seperatedSummery}>
            <div className={styles.totalPriceSp}>
              <span>Toplam İndirim</span>
              <span className={styles.orange}>20TL</span>
            </div>
            <div>
              <span>200TL</span>
            </div>
          </div>
          <Button
          variant="contained"
          color="warning"
          className={styles.orderButton}
        >
          Sepeti Onayla
        </Button>
        </div>
      </div>
    </div>
    </div>

  );
}
