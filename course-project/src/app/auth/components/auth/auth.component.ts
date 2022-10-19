import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../../../shared/directives/placeholder.directive';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'bp-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.store.select('authState').subscribe((authState) => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert();
      }
    });
  }

  onHandleError() {
    this.error = null;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;
    this.error = null;
    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    // authObservable.subscribe({
    //   next: (responseData) => {
    //     console.log(responseData);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']);
    //   },
    //   error: (error) => {
    //     this.isLoading = false;
    //     this.error = error.error.error.message;
    //     this.showErrorAlert();
    //   },
    // });

    form.reset();
  }

  private showErrorAlert() {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    componentRef.instance.message = this.error;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) this.closeSub.unsubscribe();
  }
}
