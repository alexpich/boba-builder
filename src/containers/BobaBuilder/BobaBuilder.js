import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Boba from "../../components/Boba/Boba";
import BuildControls from "../../components/Boba/BuildControls/BuildControls";

class BobaBuilder extends Component {
  state = {
    ingredients: {
      bobaPearl: 0,
      eggPudding: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Boba ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BobaBuilder;
