import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from '../../store/shopping-list.reducer';
import * as ShoppingListActions from '../../store/shopping-list.actions';

@Component({
  selector: 'bp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingListState$: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.shoppingListState$ = this.store.select('shoppingListState');
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
