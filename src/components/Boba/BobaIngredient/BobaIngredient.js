import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BobaIngredient.module.css";

class BobaIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "cup":
        ingredient = (
          <div className={classes.Cup}>
            {/* <div className={classes.MilkTea}></div> */}
          </div>
        );
        break;
      case "aloeVera":
        ingredient = <div className={classes.AloeVera}></div>;
        break;
      case "bobaPearl":
        ingredient = <div className={classes.BobaPearl}></div>;
        break;
      case "eggPudding":
        ingredient = <div className={classes.EggPudding}></div>;
        break;
      case "grassJelly":
        ingredient = <div className={classes.GrassJelly}></div>;
        break;
      case "milkTea":
        ingredient = <div className={classes.MilkTea}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BobaIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BobaIngredient;
