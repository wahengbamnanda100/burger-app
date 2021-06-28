import React from "react";
import Classes from "./buildControl.module.css";
import Control from "./control/control";

const controller = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControl = (props) => {
  return (
    <div className={Classes.buildControl}>
      <p>
        Current price = <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controller.map((ctrl) => (
        <Control
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            props.ingridentAdded(ctrl.type);
          }}
          remove={() => {
            props.ingridentRemove(ctrl.type);
          }}
          disable={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={Classes.OrderButton}
        disabled={!props.purchase}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControl;
