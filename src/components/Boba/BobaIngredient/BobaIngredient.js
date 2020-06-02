import React from "react";

import classes from "./BobaIngredient.module.css";

const bobaIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "cup":
      ingredient = <div className={classes.Cup}></div>;
      break;
    case "aloe-vera":
      ingredient = <div className={classes.AloeVera}></div>;
      break;
    case "boba":
      ingredient = <div className={classes.Boba}></div>;
      break;
    case "egg-pudding":
      ingredient = <div className={classes.EggPudding}></div>;
      break;
    case "grass-jelly":
      ingredient = <div className={classes.GrassJelly}></div>;
      break;
    case "milk-tea":
      ingredient = <div className={classes.MilkTea}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default bobaIngredient;
