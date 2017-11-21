import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';

/**
 * https://angular.io/guide/styleguide#core-feature-module
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, ContentContainerComponent],
  exports: [HeaderComponent, ContentContainerComponent]
})
export class CoreModule {}
