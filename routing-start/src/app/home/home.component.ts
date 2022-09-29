import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  loadServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    })
  }

  logIn() {
    this.authService.logIn()
  }

  logOut() {
    this.authService.logOut()
  }
}
