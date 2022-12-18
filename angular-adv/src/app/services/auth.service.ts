import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserLogin } from '../StoreLogin/login.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean;
  

  constructor(private readonly store: Store) { }

  isAuthenticated(): boolean{
    this.store.pipe(select(selectUserLogin)).subscribe(
      isLoggedin => {
      this.isLoggedin = isLoggedin
    });

    return this.isLoggedin;
  }

  
}
