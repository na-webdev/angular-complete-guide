import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

const apiKey = environment.apiKey;

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            response.expiresIn
          );
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            response.expiresIn
          );
        })
      );
  }

  signOut() {
    // this.user.next(null);
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoSignOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signOut();
    }, expirationDuration);
  }

  autoSignIn() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpiration: string;
    } = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (!userData) return;

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpiration)
    );

    if (loadedUser.token) {
      // this.user.next(loadedUser);
      this.store.dispatch(
        new AuthActions.Login({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpiration),
        })
      );
      const expirationDuration =
        new Date(userData._tokenExpiration).getTime() - new Date().getTime();
      this.autoSignOut(expirationDuration * 1000);
    }
  }
  handleAuthentication(
    email: string,
    id: string,
    token: string,
    expiration: string
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiration * 1000);
    console.log(expirationDate, 'EXPIRES IN');
    const user = new User(email, id, token, expirationDate);
    // this.user.next(user);
    this.store.dispatch(
      new AuthActions.Login({ email, userId: id, token, expirationDate })
    );
    this.autoSignOut(+expiration * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
