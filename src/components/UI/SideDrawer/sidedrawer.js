import React from "react";
import Logo from "../../Logo/logo";
import NavigationItem from "../Navigation/NavigationItems/navigationItem";
import Classes from "./sidedrawer.module.css";
import Backdrop from "../Backdrop/backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";

const sidedrawer = (props) => {
  let attachedClasses = [Classes.sidedrawer, Classes.close];
  if (props.open) {
    attachedClasses = [Classes.sidedrawer, Classes.open];
  }
  return (
    <Aux>
      <Backdrop shows={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="9%" margin="20px" />
        <nav>
          <NavigationItem />
        </nav>
      </div>
    </Aux>
  );
};

export default sidedrawer;
