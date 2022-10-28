import { Component, ComponentRef, ElementRef, ViewChild } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-custom-two-way',
  templateUrl: 'custom-two-way.component.html',
})
export class CustomTwoWayComponent {
  count: number = 0;
  @ViewChild(CounterComponent) counterElement: CounterComponent;

  clearCount() {
    this.counterElement.count = 0;
    this.counterElement.countChange.emit(0);
  }
}
