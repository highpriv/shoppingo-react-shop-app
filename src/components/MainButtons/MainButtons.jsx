import React from "react";
import Button from "@mui/material/Button";
import style from "./Mainbuttons.module.css";
function MainButtons(props) {
  return (
    <div className={style.mainButtons}>
      <div>
        <Button className={style.buttonItemMain1}>Sepete En Çok Eklenenler</Button>
      </div>
      <div>
        <Button className={style.buttonItemMain2}>En Çok Öne Çıkanlar</Button>
      </div>
      <div>
        <Button className={style.buttonItemMain3}>Flaş İndirimler</Button>
      </div>
    </div>
  );
}

export default MainButtons;
