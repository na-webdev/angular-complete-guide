import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<boolean>();
  private recipes: Recipe[] = [];
  //   [
  //   new Recipe(
  //     'Steak Recipe',
  //     'This is most delicious stake',
  //     'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
  //     [new Ingredient('Meat', 4), new Ingredient('Oil', 1)]
  //   ),
  //   new Recipe(
  //     'Plov Recipe',
  //     'This is most delicious Plov',
  //     'https://qph.cf2.quoracdn.net/main-qimg-253427094991c3ef41c9b127f3796df4.webp',
  //     [new Ingredient('Meat', 2), new Ingredient('Rice', 1)]
  //   ),
  //   new Recipe(
  //     'Chicken Kazan Kebab',
  //     'Very good meal',
  //     'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000',
  //     [new Ingredient('Chicken Meat', 2), new Ingredient('Potato', 1)]
  //   ),
  // ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeId(id: number) {
    return { ...this.recipes[id] };
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(true);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = { ...newRecipe };
    console.log(this.recipes);
    this.recipesChanged.next(true);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(true);
  }

  setRecipes(recipesData: Recipe[]) {
    this.recipes = recipesData;
    this.recipesChanged.next(true);
  }
}
