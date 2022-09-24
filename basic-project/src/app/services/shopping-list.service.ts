import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  @Output() shoppingListChanged = new EventEmitter();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 2),
  ];

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
    this.shoppingListChanged.emit();
  }

  deleteIngredient(item: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (ingredient) =>
        !(ingredient.name === item.name && ingredient.amount === item.amount)
    );
    this.shoppingListChanged.emit();
  }

  filterAndAddIngredients(items: Ingredient[]) {}
}
