import { RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './core/store/root-reducer';
import { environment } from '../environments/environment';
import { AuthInterceptorService } from './core/services/auth-interceptor/auth-interceptor.service';
import { HeaderComponent } from './core/components/header/header.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './core/services/http/http.service';
import { ReduxService } from './core/services/redux/redux.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    ContentModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: environment.reduxMaxStoreAge
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    CookieService,
    HttpService,
    ReduxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
