import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/button/button";

const orderSummery = (props) => {
  const ingridentSummary = Object.keys(props.ingrident).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingrident[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Selected Ingridents are :</p>
      <ul>{ingridentSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btntype="Danger" clicked={props.orderCancel}>
        CANCEL
      </Button>
      <Button btntype="Success" clicked={props.orderContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummery;
