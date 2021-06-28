import React, { Component } from "react";
import Order from "../../components/Order/order";
import axios from "../../axios-burger";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import order from "../../components/Order/order";

class orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
        console.log("Orders data :", this.state.orders);
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((orders) => {
          return (
            <Order
              key={orders.id}
              ingridents={orders.ingredient}
              price={orders.price}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(orders, axios);
