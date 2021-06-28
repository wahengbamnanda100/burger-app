import React from "react";
import Classes from "./item.module.css";
import { NavLink } from "react-router-dom";

const item = (props) => {
  return (
    <li className={Classes.item}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={Classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default item;
