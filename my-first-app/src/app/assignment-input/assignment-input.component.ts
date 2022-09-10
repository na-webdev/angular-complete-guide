import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-input',
  templateUrl: './assignment-input.component.html',
  styleUrls: ['./assignment-input.component.css'],
})
export class AssignmentInputComponent implements OnInit {
  username: string = '';
  constructor() {}

  ngOnInit(): void {}

  clearInput() {
    this.username = '';
  }
}
