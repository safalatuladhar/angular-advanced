import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule
  ],
})
export class TodoModule {}
