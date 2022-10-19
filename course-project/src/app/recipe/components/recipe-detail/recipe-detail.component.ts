import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'bp-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeData: Recipe;
  index: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = +params['id'];
      this.recipeData = this.recipeService.getRecipeId(this.index);
    });
  }

  addToShoppingList(items: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredient(items));
  }

  deleteRecipe(index: number) {
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['/recipes']);
  }
}
