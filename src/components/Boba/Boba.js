import React from "react";

import classes from "./Boba.module.css";
import BobaIngredient from "./BobaIngredient/BobaIngredient";

const boba = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    console.log({ igKey });
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BobaIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Boba}>
      <div className={classes.Cup}>
        {transformedIngredients}
      </div>
    </div>
  );
};

export default boba;
