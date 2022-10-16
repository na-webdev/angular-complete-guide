import { Recipe } from '../../shared/models/recipe.model';
import { Action } from '@ngrx/store';

export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export class AddRecipeAction implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export type RecipeAction = AddRecipeAction;
