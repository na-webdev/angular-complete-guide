import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../store/shopping-list.actions';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'bp-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingListState$: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.shoppingListState$ = this.store.select('shoppingListState');
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
