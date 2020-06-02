import React from "react";

import classes from "./Boba.module.css";
import BobaIngredient from "./BobaIngredient/BobaIngredient";

const boba = (props) => {
  return (
    <div className={classes.Boba}>
      <BobaIngredient type={"cup"} />
      <BobaIngredient type={"boba"} />
      <BobaIngredient type={"milk-tea"} />
    </div>
  );
};

export default boba;
