import { HttpComponentInteropService } from './services/http-component-interop/http-component-interop.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { HttpComponent } from './components/http/http.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { DispatchComponent } from './components/ngrx/dispatch/dispatch.component';
import { StoreSubscribeComponent } from './components/ngrx/store-subscribe/store-subscribe.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [HttpComponentInteropService],
  declarations: [NgrxComponent, HttpComponent, MainInfoComponent, DispatchComponent, StoreSubscribeComponent]
})
export class ContentModule {}
