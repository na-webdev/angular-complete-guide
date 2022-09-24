import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'bp-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addToShoppingList(items: Ingredient[]) {
    this.shoppingListService.addIngredients(items);
  }
}
