import React from "react";
import Classes from "./order.module.css";

const order = (props) => {
  const ingrident = [];
  for (let ingridentName in props.ingridents) {
    ingrident.push({
      name: ingridentName,
      amount: props.ingridents[ingridentName],
    });
  }

  const ingridentOutput = ingrident.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} - {ig.amount}
      </span>
    );
  });

  console.log("Hello");

  return (
    <div className={Classes.Order}>
      <p>Ingridents : {ingridentOutput}</p>
      <p>
        Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
