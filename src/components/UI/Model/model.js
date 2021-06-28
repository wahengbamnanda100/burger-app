import React, { Component } from "react";
import Classes from "./model.module.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Backdrop from "../Backdrop/backdrop";

class model extends Component {
  componentDidMount() {}
  componentDidUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <Aux>
        <Backdrop clicked={this.props.canceled} shows={this.props.show} />
        <div
          className={Classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default model;
