import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import NaviBar from "./components/NaviBar";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Success from "./components/success";

function App() {
  return (
    <div id="flex-box">
      <NaviBar />
      <div id="article">
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/success" component={Success} />
              <Route exact component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </div>
      <Footer />
    </div>
  );
}

export default App;
