import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular_in_depth';
  message = 'Message';

  ngOnInit() {
    setTimeout(() => {
      this.message += ' ' + Math.floor(Math.random() * 10);
    }, 2000);
    setTimeout(() => (this.title = 'Angular'), 8000);
  }
}
