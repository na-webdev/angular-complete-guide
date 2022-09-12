import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationLink } from '../../shared/navigation-link.type';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  @Output() activatedLink = new EventEmitter<NavigationLink>();
  collapsed = true;

  activateLink(link: NavigationLink) {
    this.activatedLink.emit(link);
  }
}
