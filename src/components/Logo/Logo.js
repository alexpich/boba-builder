import React from "react";

import bobaLogo from "../../assets/images/boba-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={bobaLogo} alt="BobaBuilder" />
  </div>
);

export default logo;
