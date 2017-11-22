import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { NgrxComponent } from '../content/components/ngrx/ngrx.component';
import { HttpComponent } from '../content/components/http/http.component';
import { MainInfoComponent } from '../content/components/main-info/main-info.component';
import { StoreModule } from '@ngrx/store';

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
  imports: [
    CommonModule,
    StoreModule.forRoot({ routerReducer: routerReducer }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule
  ],
  declarations: []
})
export class AppRoutingModule {}
