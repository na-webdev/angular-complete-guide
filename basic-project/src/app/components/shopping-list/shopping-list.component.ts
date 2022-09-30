import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingListChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListChangeSub =
      this.shoppingListService.shoppingListChanged.subscribe(() => {
        this.ingredients = this.shoppingListService.getIngredients();
      });
  }

  ngOnDestroy() {
    this.shoppingListChangeSub.unsubscribe();
  }
}
