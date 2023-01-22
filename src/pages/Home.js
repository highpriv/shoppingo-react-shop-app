import React from "react";
import Brands from "../components/Brands/Brands";
import Campaigns from "../components/Campaigns/Campaigns";
import MainButtons from "../components/MainButtons/MainButtons";
import Navbar from "../layouts/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="containerMain">
        <Brands />
      </div>

      <div className="mainButtons">
        <MainButtons />
      </div>
      <div className="campaigns">
        <Campaigns />
      </div>
    </div>
  );
};

export default Home;
