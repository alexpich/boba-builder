import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Boba from "../../components/Boba/Boba";

class BobaBuilder extends Component {
  render() {
    return (
      <Aux>
        <Boba />
      </Aux>
    );
  }
}

export default BobaBuilder;
