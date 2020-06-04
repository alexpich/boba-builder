import React from "react";

import classes from "./Boba.module.css";
import BobaIngredient from "./BobaIngredient/BobaIngredient";

const boba = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BobaIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some toppings</p>;
  }

  return (
    <div className={classes.Boba}>
      <div className={classes.Cup}>{transformedIngredients}</div>
    </div>
  );
};

export default boba;
