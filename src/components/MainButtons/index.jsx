import React from "react";
import Button from "@mui/material/Button";
import "./mainbuttons.css";
function MainButtons(props) {
  return (
    <div className="main-buttons">
      <div>
        <Button className="button-item-main-1">Sepete En Çok Eklenenler</Button>
      </div>
      <div>
        <Button className="button-item-main-2">En Çok Öne Çıkanlar</Button>
      </div>
      <div>
        <Button className="button-item-main-3">Flaş İndirimler</Button>
      </div>
    </div>
  );
}

export default MainButtons;
