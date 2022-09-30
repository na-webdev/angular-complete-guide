import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'bp-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeData: Recipe;
  index: number;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = +params['id'];
      this.recipeData = this.recipeService.getRecipeId(this.index);
    });
  }

  addToShoppingList(items: Ingredient[]) {
    this.shoppingListService.addIngredients(items);
  }
}
