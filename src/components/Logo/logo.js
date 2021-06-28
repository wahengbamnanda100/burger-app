import React from "react";
import Classes from "./logo.module.css";
import LogoImg from "../../assets/image/logo.png";

const logo = (props) => {
  return (
    <div
      className={Classes.Logo}
      style={{ height: props.height, marginBottom: props.margin }}
    >
      <img src={LogoImg} alt="Logo image" />
    </div>
  );
};

export default logo;
