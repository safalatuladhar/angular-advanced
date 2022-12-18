import { createReducer, on } from "@ngrx/store";
import * as UserLoginActions from "./login.action";

export interface UserLoginState {
  isLoggedin: boolean;
}

export const userLoginInitialState: UserLoginState = {
    isLoggedin: false
}

export const userLoginFeatureKey = 'userLoginState';

export const  userLoginReducer = createReducer(
    userLoginInitialState,
    on(UserLoginActions.userLoginAction,(state,payload)=>{
        const isLoggedin = payload.isLoggedin;
        return{...state, isLoggedin};
    })
)

