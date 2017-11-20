import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import { HttpComponent } from './http/http.component';
import { MainInfoComponent } from './main-info/main-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgrxComponent, HttpComponent, MainInfoComponent]
})
export class ContentModule { }
