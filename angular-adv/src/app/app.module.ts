import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './forms/todo/todo.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './forms/todo/store/todo.reducer';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { VoidComponent } from './void/void.component';
import { userLoginReducer } from './StoreLogin/login.reducer';

@NgModule({
  declarations: [AppComponent, VoidComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ userLoginState: userLoginReducer }),
    BrowserAnimationsModule,
    TodoModule,
    MaterialModule,
    HeaderModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
