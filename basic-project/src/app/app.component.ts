import { Component } from '@angular/core';
import { NavigationLink } from './shared/navigation-link.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basic-project';
  activeLink: NavigationLink;

  constructor() {
    this.activeLink = 'recipe';
  }

  navigateTo(link: NavigationLink) {
    this.activeLink = link;
  }
}
