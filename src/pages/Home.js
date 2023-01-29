import React from "react";
import { Brands, Campaigns, Carousel, MainButtons } from "../components";
import { CarouselItem } from "../components/Carousel";

import Navbar from "../layouts/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="containerMain">
      <Navbar />
      <div className="topBrands">
        <Brands />
      </div>
      <div className="mainButtons">
        <MainButtons />
      </div>
      <div className="campaigns">
        <Campaigns />
      </div>

      <div className="best-sellers">
        <span className="carousel-head">Öne Çıkanlar</span>
        <Carousel>
          <CarouselItem>test1</CarouselItem>
          <CarouselItem>test2</CarouselItem>
          <CarouselItem>test3</CarouselItem>
          <CarouselItem>test4</CarouselItem>
          <CarouselItem>test5</CarouselItem>
          <CarouselItem>test6</CarouselItem>
          <CarouselItem>test7</CarouselItem>
          <CarouselItem>test8</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
