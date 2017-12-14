import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * https://angular.io/guide/styleguide#shared-feature-module
 */
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [],
  declarations: []
})
export class SharedModule {}
