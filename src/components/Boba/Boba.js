import React from "react";

import classes from "./Boba.module.css";
import BobaIngredient from "./BobaIngredient/BobaIngredient";

const boba = (props) => {
  return (
    <div className={classes.Boba}>
      <div className={classes.Cup}>
        {/* <BobaIngredient type={"cup"} /> */}
        <BobaIngredient type={"boba"} />
        <BobaIngredient type={"egg-pudding"} />
        {/* <BobaIngredient type={"milk-tea"} /> */}
      </div>
    </div>
  );
};

export default boba;
