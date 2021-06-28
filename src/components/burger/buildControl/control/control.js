import React from "react";
import Classes from "./control.module.css";

const control = (props) => {
  return (
    <div className={Classes.BuildControl}>
      <div className={Classes.Label}>{props.label} </div>
      <button
        className={Classes.Less}
        onClick={props.remove}
        disabled={props.disable}
      >
        less
      </button>
      <button className={Classes.More} onClick={props.added}>
        more
      </button>
    </div>
  );
};

export default control;
