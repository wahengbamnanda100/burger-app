import React, { Component } from "react";
import classes from "./burgerIngrident.module.css";
import PropTypes from "prop-types";

class BugerIngrident extends Component {
  render() {
    let ingrident = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingrident = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingrident = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingrident = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingrident = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingrident = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingrident = <div className={classes.Bacon}></div>;
        break;
      default:
        ingrident = null;
    }

    return ingrident;
  }
}

BugerIngrident.propType = {
  type: PropTypes.string.isRequired,
};

export default BugerIngrident;
