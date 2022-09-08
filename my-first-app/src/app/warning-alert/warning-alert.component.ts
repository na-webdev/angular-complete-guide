import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: [],
})
export class WarningAlertComponent {
  message: string;
  constructor() {
    this.message = 'Please open your console to see warning messages!';
  }
}
