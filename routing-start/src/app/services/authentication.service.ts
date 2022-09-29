import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedIn = false
  constructor() {}

  isAuthenticated() {
    return this.loggedIn
  }

  logIn() {
    this.loggedIn = true
  }

  logOut() {
    this.loggedIn = false
  }
}
