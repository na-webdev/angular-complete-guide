import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;
  userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store.select('authState').subscribe((authState) => {
      this.isAuthenticated = !!authState.user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onSignOut() {
    this.authService.signOut();
  }
}
