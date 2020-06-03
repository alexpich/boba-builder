import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Boba from "../../components/Boba/Boba";

class BobaBuilder extends Component {
  state = {
    ingredients: {
      bobaPearl: 1,
      eggPudding: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Boba ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BobaBuilder;
