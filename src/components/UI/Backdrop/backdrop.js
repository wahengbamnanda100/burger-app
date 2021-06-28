import React from "react";
import Classes from "./backdrop.module.css";

const backdrop = (props) => {
  return props.shows ? (
    <div className={Classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
