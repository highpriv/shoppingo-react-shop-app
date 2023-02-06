import React from "react";
import Avatar from "@mui/material/Avatar";
import style from "./Brands.module.css";

function Brands(props) {
  return (
    <div className={style.brands}>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png"
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Puma</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/2/Apple_202301022041.png
  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Apple</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="      https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png

  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Xiaomi</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="      https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/10/Pullbearyeni.png


  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Pull & Bear</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="      https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355251_Philips.png



  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Philips</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/29/Dyson.png



  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Dyson</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png



  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Adidas</p>
      </div>
      <div className={style.brand}>
        <Avatar
          alt="Remy Sharp"
          className={style.brandImg}
          src="  https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png



  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Hummel</p>
      </div>
      <div className={style.brand}>
        <Avatar
          className={style.brandImg}
          alt="Remy Sharp"
          src="      https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355085_JackJones.png




  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Jack & Jones</p>
      </div>
      <div className={style.brand}>
        <Avatar
          className={style.brandImg}
          alt="Remy Sharp"
          src="       https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/samsung2.png





  "
          sx={{ width: 70, height: 70, border: "1px solid #eaeaea" }}
        />
        <p>Samsung</p>
      </div>
    </div>
  );
}

export default Brands;
