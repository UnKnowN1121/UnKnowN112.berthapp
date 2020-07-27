import React from "react";
import Shop from "./Shop";
import "./Home.css";
import bg from "../images/broken-chocolate.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="row fullscreendiv">
        <div className="float-left">
          <p>Bertha's Chocolate Factory</p>
          <span>The Finest Chocolates</span>
          <br />
          <Button className="btn btn-primary btn-browse" href="#shopdiv">
            Browse your favourites
          </Button>
        </div>
        <div className="">
          <img src={bg} className="bgimg" alt="chocolate-broken"></img>
        </div>
      </div>
      <div id="shopdiv" className="shopdiv">
        <Shop />
      </div>
    </>
  );
};

export default Home;
