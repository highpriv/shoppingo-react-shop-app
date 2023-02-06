import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import style from "./Campaigns.module.css";

function Campaigns(props) {
  return (
    <div className={style.campaignContainer}>
      <Card  className={style.campaignCard}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card  className="campaign-card">
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card className="campaign-card">
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card  className="campaign-card">
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card  className="campaign-card">
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card  className="campaign-card">
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className={style.campaignTextWrapper}>
          <p className={style.campaignText}>
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Campaigns;
