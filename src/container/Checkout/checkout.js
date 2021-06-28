import React, { Component } from "react";
import CheckoutSummary from "./CheckourSummary/checkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Contact/contactData";

class checkout extends Component {
  state = {
    ingridents: null,
    price: 0,
  };

  UNSAFE_componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingridents = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingridents[param[0]] = +param[1];
      }
    }
    this.setState({ ingridents: ingridents, price: price });
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingridents={this.state.ingridents}
          checkoutcontinued={this.checkoutContinuedHandler}
          checkoutcanceled={this.checkoutCanceledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingridents={this.state.ingridents}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default checkout;
