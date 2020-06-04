import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Boba from "../../components/Boba/Boba";
import BuildControls from "../../components/Boba/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  bobaPearl: 0.6,
  eggPudding: 0.7,
};

class BobaBuilder extends Component {
  state = {
    ingredients: {
      bobaPearl: 0,
      eggPudding: 0,
    },
    totalPrice: 9,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Boba ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BobaBuilder;
