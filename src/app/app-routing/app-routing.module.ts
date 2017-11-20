import { NgrxComponent } from './../content/ngrx/ngrx.component';
import { HttpComponent } from './../content/http/http.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'http', pathMatch: 'full' },
  { path: 'http', component: HttpComponent },
  { path: 'ngrx', component: NgrxComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
