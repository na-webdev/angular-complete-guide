import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';

@Component({
  selector: 'bp-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  ngOnInit(): void {}
}