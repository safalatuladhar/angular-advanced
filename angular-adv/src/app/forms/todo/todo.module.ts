import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from './store/todo.reducer';


const routes: Routes = [{ path: '', component: TodoComponent }];
@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoFeatureKey, todoReducer)
  ],

  exports: [RouterModule],
})
export class TodoModule {}
