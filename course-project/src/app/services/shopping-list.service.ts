import { Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  @Output() shoppingListChanged = new Subject<boolean>();
  @Output() shoppingItemSelected = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 2),
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(items: Ingredient[]) {
    items.forEach((item) => {
      let existingIngredientIndex = this.ingredients.findIndex(
        (ingredient) => ingredient.name === item.name
      );
      if (existingIngredientIndex !== -1) {
        this.ingredients[existingIngredientIndex] = {
          name: item.name,
          amount:
            this.ingredients[existingIngredientIndex].amount + item.amount,
        };
      } else {
        this.ingredients.push(item);
      }
    });
    this.shoppingListChanged.next(true);
  }

  updateIngredient(index: number, item: Ingredient) {
    this.ingredients[index] = item;
    this.shoppingListChanged.next(true);
  }

  deleteIngredient(item: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (ingredient) =>
        !(ingredient.name === item.name && ingredient.amount === item.amount)
    );
    this.shoppingListChanged.next(true);
  }

  filterAndAddIngredients(items: Ingredient[]) {}
}
