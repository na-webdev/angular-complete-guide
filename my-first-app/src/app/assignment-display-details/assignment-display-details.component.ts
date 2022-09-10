import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-display-details',
  templateUrl: './assignment-display-details.component.html',
  styleUrls: ['./assignment-display-details.component.css'],
})
export class AssignmentDisplayDetailsComponent implements OnInit {
  showSecret = false;
  buttonClickLog = [];
  constructor() {}

  ngOnInit(): void {}

  toggleShowSecret() {
    let now = new Date();
    this.showSecret = !this.showSecret;
    this.buttonClickLog.push(
      `You exposed secret at ${now.toLocaleTimeString()}  ${now.toLocaleDateString()}`
    );
  }
}
