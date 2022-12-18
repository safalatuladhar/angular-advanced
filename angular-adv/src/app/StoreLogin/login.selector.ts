import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userLoginFeatureKey, UserLoginState } from "./login.reducer";

export const selectUserLoginState = createFeatureSelector<UserLoginState>(userLoginFeatureKey);

export const selectUserLogin = createSelector(
  selectUserLoginState,
  (state: UserLoginState) => state && state.isLoggedin
);