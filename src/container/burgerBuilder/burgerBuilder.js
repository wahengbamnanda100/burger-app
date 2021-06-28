import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import Burger from "../../components/burger/burger";
import BuildControl from "../../components/burger/buildControl/buildControl";
import Model from "../../components/UI/Model/model";
import OrderSummery from "../../components/burger/OrderSummery/orderSummery";
import axios from "../../axios-burger";
import Spinner from "../../components/UI/spinner/spinner";
import errorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGRIDENT_PRICE = {
  salad: 0.5,
  bacon: 0.6,
  cheese: 0.7,
  meat: 0.9,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: null,
    totalPrice: 4,
    purchaseble: false,
    ordering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://react-my-burger-db271-default-rtdb.firebaseio.com/ingridents.json"
      )
      .then((response) => this.setState({ ingredient: response.data }))
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  orderingState = () => {
    this.setState({ ordering: true });
  };

  cencelingState = () => {
    this.setState({ ordering: false });
  };

  orderContinue = () => {
    //alert("You have placed an order!");

    const queryParam = [];
    for (let i in this.state.ingredient) {
      queryParam.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredient[i])
      );
      queryParam.push("price=" + this.state.totalPrice);
    }
    const queryString = queryParam.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  purchasingState(ingrident) {
    const sum = Object.keys(ingrident)
      .map((igkey) => {
        return ingrident[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseble: sum > 0 });
  }

  addIngridentHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount + 1;
    const updateIngrident = { ...this.state.ingredient };
    updateIngrident[type] = updatedCount;
    const priceAddition = INGRIDENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: updatedPrice, ingredient: updateIngrident });
    this.purchasingState(updateIngrident);
  };

  removeIngridentHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngrident = { ...this.state.ingredient };
    updateIngrident[type] = updatedCount;
    const priceDeduction = INGRIDENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: updatedPrice, ingredient: updateIngrident });
    this.purchasingState(updateIngrident);
  };

  render() {
    const disabledControl = { ...this.state.ingredient };
    for (let key in disabledControl) {
      disabledControl[key] = disabledControl[key] <= 0;
    }
    let orderSummery = null;

    let burger = this.state.error ? <p>An error occur!</p> : <Spinner />;
    if (this.state.ingredient) {
      burger = (
        <Aux>
          <Burger ingredient={this.state.ingredient} />
          <BuildControl
            price={this.state.totalPrice}
            ingridentAdded={this.addIngridentHandler}
            ingridentRemove={this.removeIngridentHandler}
            disabled={disabledControl}
            purchase={this.state.purchaseble}
            ordered={this.orderingState}
          />
        </Aux>
      );
      orderSummery = (
        <OrderSummery
          price={this.state.totalPrice}
          ingrident={this.state.ingredient}
          orderCancel={this.cencelingState}
          orderContinue={this.orderContinue}
        />
      );
    }
    if (this.state.loading) {
      orderSummery = <Spinner />;
    }

    return (
      <Aux>
        <Model show={this.state.ordering} canceled={this.cencelingState}>
          {orderSummery}
        </Model>
        {burger}
      </Aux>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);
