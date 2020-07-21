import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import choco from "./images/choco.mp4";

import "./css/App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import NaviBar from "./components/NaviBar";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
function App() {
  return (
    <React.Fragment>
      <NaviBar />
      <React.Fragment>
        <video src={choco} autoPlay={true} loop={true} className="bgvideo" />
      </React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
