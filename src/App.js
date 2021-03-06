import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BobaBuilder from "./containers/BobaBuilder/BobaBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BobaBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
