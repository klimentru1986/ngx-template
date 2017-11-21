import { ReduxService } from './services/redux/redux.service';
import { HttpService } from './services/http/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * https://angular.io/guide/styleguide#shared-feature-module
 */
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, ReduxService],
  declarations: []
})
export class SharedModule {}
