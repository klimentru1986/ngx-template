import { RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './core/store/root-reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ContentModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: environment.reduxMaxStoreAge
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
