import { MainInfoComponent } from './../content/main-info/main-info.component';
import { NgrxComponent } from './../content/ngrx/ngrx.component';
import { HttpComponent } from './../content/http/http.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main-info', pathMatch: 'full' },
  { path: 'main-info', component: MainInfoComponent },
  { path: 'http', component: HttpComponent },
  { path: 'ngrx', component: NgrxComponent }
];

/**
 * https://angular.io/guide/router
 */
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
