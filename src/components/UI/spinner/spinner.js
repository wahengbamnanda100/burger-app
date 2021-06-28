import React from "react";
import Classes from "./spinner.module.css";

const spinner = () => {
  return <div className={Classes.loader}>Loading...</div>;
};

export default spinner;
