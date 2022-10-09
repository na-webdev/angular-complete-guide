import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bp-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  selectedItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.shoppingItemSelected.subscribe(
      (index: number) => {
        this.editMode = true;
        this.selectedItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.shoppingEditForm.setValue({ ...this.editItem });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteShoppingItem() {
    this.shoppingListService.deleteIngredient(this.editItem);
    this.clearForm();
  }

  onSubmit() {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedItemIndex, {
        ...this.shoppingEditForm.value,
      });
    } else {
      this.shoppingListService.addIngredients([
        {
          name: this.shoppingEditForm.value.name,
          amount: this.shoppingEditForm.value.amount,
        },
      ]);
    }
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.shoppingEditForm.reset();
  }
}
