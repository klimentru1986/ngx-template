import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgrxComponent } from '../content/components/ngrx/ngrx.component';
import { HttpComponent } from '../content/components/http/http.component';
import { MainInfoComponent } from '../content/components/main-info/main-info.component';

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
