import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  shoppingListState: fromShoppingList.State;
  authState: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingListState: fromShoppingList.shoppingListReducer,
  authState: fromAuth.authReducer,
};
