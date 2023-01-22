import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./campaigns.css";

function Campaigns(props) {
  return (
    <div className="campaign-container">
      <Card sx={{ width: 450, boxShadow: "none" }} className="campaign-card">
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className="campaign-text-wrapper">
          <p className="campaign-text">
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card sx={{ width: 450, boxShadow: "none" }} className="campaign-card">
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className="campaign-text-wrapper">
          <p className="campaign-text">
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>

      <Card sx={{ width: 450, boxShadow: "none" }} className="campaign-card">
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.dsmcdn.com/ty680/pimWidgetApi/mobile_20230109085812_thumbnail2299170ElektronikMobile202301061801.jpg"
          title="green iguana"
        />
        <CardContent className="campaign-text-wrapper">
          <p className="campaign-text">
            Giyilebilir teknoloji ürünlerinde özel fiyatlar! %30'a varan
            indirimi kaçırma.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Campaigns;
