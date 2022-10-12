import { Component, OnInit } from '@angular/core';
import { NavigationLink } from './shared/navigation-link.type';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'course-project';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoSignIn();
  }
}
