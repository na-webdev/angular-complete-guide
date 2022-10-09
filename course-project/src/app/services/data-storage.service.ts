import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../shared/models/recipe.model';
import { map, tap } from 'rxjs';

const apiUrl =
  'https://ng-complete-guide-8e82a-default-rtdb.asia-southeast1.firebasedatabase.app/';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(apiUrl + 'recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(apiUrl + 'recipes.json').pipe(
      map((response) => {
        return response.map((recipe) => ({
          ...recipe,
          ...(recipe.ingredients ? {} : { ingredients: [] }),
        }));
      }),
      tap((recipes) => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
