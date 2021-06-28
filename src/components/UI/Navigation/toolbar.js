import React from "react";
import Classes from "./toolbar.module.css";
import Logo from "../../Logo/logo";
import NavigationItem from "../Navigation/NavigationItems/navigationItem";
import DrawerToggle from "../SideDrawer/drawerToggle/drawerToggle";

const toolbar = (props) => {
  return (
    <header className={Classes.Header}>
      <DrawerToggle clicked={props.drawerToggle} />
      <Logo height="80%" margin="0" />
      <nav className={Classes.DesktopOnly}>
        <NavigationItem />
      </nav>
    </header>
  );
};

export default toolbar;
