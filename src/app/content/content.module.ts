import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgrxComponent, HttpComponent]
})
export class ContentModule { }
