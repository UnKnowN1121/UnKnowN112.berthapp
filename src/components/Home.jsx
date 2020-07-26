import React from "react";
import Shop from "./Shop";
import "./Home.css";
import bg from "../images/broken-chocolate.png";

const Home = () => {
  return (
    <>
      <div className="row fullscreendiv">
        <div className="float-left">
          <p>Bertha's Chocolate Factory</p>
          <span>The Finest Chocolates</span>
        </div>
        <div className="">
          <img src={bg} className="bgimg"></img>
        </div>
      </div>
      <div className="shopdiv">
        <Shop />
      </div>
    </>
  );
};

export default Home;
