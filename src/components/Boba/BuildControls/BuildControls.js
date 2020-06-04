import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Boba Pearls", type: "bobaPearl" },
  { label: "Egg Pudding", type: "eggPudding" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default buildControls;
