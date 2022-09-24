import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'bp-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addShoppingItem() {
    this.shoppingListService.addIngredients([
      {
        name: this.nameInputRef.nativeElement.value,
        amount: +this.amountInputRef.nativeElement.value,
      },
    ]);
  }

  deleteShoppingItem() {
    this.shoppingListService.deleteIngredient({
      name: this.nameInputRef.nativeElement.value,
      amount: +this.amountInputRef.nativeElement.value,
    });
  }

  clear() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
