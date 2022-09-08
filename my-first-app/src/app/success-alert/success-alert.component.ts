import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: [],
})
export class SuccessAlertComponent {
  message: string;
  constructor() {
    this.message = 'You successfully opened the page!';
  }
}
