import React from "react";
import Classes from "./button.module.css";

const button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[Classes.Button, Classes[props.btntype]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
