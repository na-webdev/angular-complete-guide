import { Ingredient } from '../../shared/models/ingredient.model';
import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  selectedIngredientIndex: number;
}

export interface AppState {
  shoppingListState: State;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Banana', 2)],
  selectedIngredient: null,
  selectedIngredientIndex: -1,
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.Actions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.selectedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.selectedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        selectedIngredientIndex: -1,
        selectedIngredient: null,
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.selectedIngredientIndex;
        }),
        selectedIngredientIndex: -1,
        selectedIngredient: null,
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        selectedIngredientIndex: action.payload,
        selectedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        selectedIngredient: null,
        selectedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
