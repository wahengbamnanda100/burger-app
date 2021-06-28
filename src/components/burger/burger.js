import React from "react";
import Classes from "./burger.module.css";
import BurgerIngrident from "./burgerIngrident/burgerIngrident";

const burger = (props) => {
  let transformIngrident = Object.keys(props.ingredient)
    .map((igKey) => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngrident key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngrident.length === 0) {
    transformIngrident = <p>Please start adding ingridients!</p>;
  }

  return (
    <div className={Classes.Burger}>
      <BurgerIngrident type="bread-top" />
      {transformIngrident}
      <BurgerIngrident type="bread-bottom" />
    </div>
  );
};

export default burger;
