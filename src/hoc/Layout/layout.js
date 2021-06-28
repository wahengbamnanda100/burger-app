import React, { Component } from "react";
import Aux from "../Auxilary/Auxilary";
import Classes from "./layout.module.css";
import Toolbar from "../../components/UI/Navigation/toolbar";
import Sidedrawer from "../../components/UI/SideDrawer/sidedrawer";

class layout extends Component {
  state = {
    ShowSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ ShowSideDrawer: false });
  };

  toggleDrawerButton = () => {
    console.log("toogled");
    this.setState((prevState) => {
      return { ShowSideDrawer: !prevState.ShowSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggle={this.toggleDrawerButton} />
        <Sidedrawer
          closed={this.sideDrawerCloseHandler}
          open={this.state.ShowSideDrawer}
        />
        <main className={Classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default layout;
