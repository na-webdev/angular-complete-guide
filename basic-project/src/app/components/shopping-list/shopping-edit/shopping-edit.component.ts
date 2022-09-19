import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'bp-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() shoppingItemAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addShoppingItem() {
    this.shoppingItemAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: +this.amountInputRef.nativeElement.value,
    });
  }
}
