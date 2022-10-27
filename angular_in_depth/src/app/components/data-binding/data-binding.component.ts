import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.scss'],
})
export class DataBindingComponent {
  color = 'black';
  title = 'Data Binding';
  propertyBindingText = 'Property binding';
  isEventBinding = false;
  twoWayBindingText = 'Two-way binding';
  value: string;
  revealContent(el: HTMLElement) {
    el.textContent = 'Event binding';
    this.isEventBinding = true;
    console.log(this.twoWayBindingText);
  }
}
