import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Steak Recipe',
      'This is most delicious stake',
      'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
      [new Ingredient('Meat', 4), new Ingredient('Oil', 1)]
    ),
    new Recipe(
      'Plov Recipe',
      'This is most Plov',
      'https://qph.cf2.quoracdn.net/main-qimg-253427094991c3ef41c9b127f3796df4.webp',
      [new Ingredient('Meat', 2), new Ingredient('Rice', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
