import React from "react";
import Classes from "./navigationItem.module.css";
import Items from "./item/item";

const navigationItem = () => {
  return (
    <ul className={Classes.NavigationItem}>
      <Items link="/" exact>
        Burger Build
      </Items>
      <Items link="/orders">Orders</Items>
    </ul>
  );
};

export default navigationItem;
