import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/layout";
import BurgerBuilder from "./container/burgerBuilder/burgerBuilder";
import Checkout from "./container/Checkout/checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./container/Orders/orders";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
