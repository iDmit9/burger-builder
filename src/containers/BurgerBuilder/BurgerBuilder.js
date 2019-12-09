import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContriols/BuildControls';

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.3,
   bacon: 0.7
};

class BurgerBuilder extends Component {
   // constructor(props) {
   //     super(props);
   //     this.state = { ...}
   // }
   state = {
      ingredients: {
         salad: 1,
         bacon: 1,
         cheese: 1,
         meat: 1
      }
   }

   addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
         ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
   }

   render() {
      return (
         <>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls />
         </>
      );
   }
}

export default BurgerBuilder;