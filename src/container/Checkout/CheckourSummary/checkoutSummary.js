import React from "react";
import Burger from "../../../components/burger/burger";
import Button from "../../../components/UI/button/button";
import Classes from "./chekoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={Classes.checkoutSummary}>
      <h1>Thank you for shopping!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredient={props.ingridents} />
      </div>
      <Button btntype="Danger" clicked={props.checkoutcanceled}>
        CANCEL
      </Button>
      <Button btntype="Success" clicked={props.checkoutcontinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
