import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { userLoginAction } from 'src/app/StoreLogin/login.action';
import { selectUserLogin } from 'src/app/StoreLogin/login.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedin: boolean;

  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectUserLogin), takeUntil(this.unsubscribe))
      .subscribe((isLoggedin) => {
        this.isLoggedin = isLoggedin;
      });
  }

  login(isLoggedin: boolean) {
    this.store.dispatch(userLoginAction({ isLoggedin }));
  }

  logout(isLoggedin: boolean) {
    this.store.dispatch(userLoginAction({ isLoggedin }));
  }

  ngOnDestroy(): void {

    this.unsubscribe.next();
    this.unsubscribe.complete();
  
  }
}
