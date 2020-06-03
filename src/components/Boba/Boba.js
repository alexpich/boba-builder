import React from "react";

import classes from "./Boba.module.css";
import BobaIngredient from "./BobaIngredient/BobaIngredient";

const boba = (props) => {
  return (
    <div className={classes.Boba}>
      <div className={classes.Cup}>
        <BobaIngredient type={"boba-pearl"} />
        <BobaIngredient type={"egg-pudding"} />
      </div>
    </div>
  );
};

export default boba;
