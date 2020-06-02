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
  }
}

BobaIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BobaIngredient;
