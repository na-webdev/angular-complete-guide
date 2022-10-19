import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../store/shopping-list.actions';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'bp-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('shoppingListState')
      .subscribe((stateData) => {
        if (stateData.selectedIngredientIndex > -1) {
          this.editMode = true;
          this.editItem = stateData.selectedIngredient;
          this.shoppingEditForm.setValue({ ...this.editItem });
        } else {
          this.editMode = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  deleteShoppingItem() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.clearForm();
  }

  onSubmit() {
    const formValue = this.shoppingEditForm.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(
        new ShoppingListActions.AddIngredient([newIngredient])
      );
    }
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.shoppingEditForm.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
