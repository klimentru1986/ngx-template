import { HttpComponentInteropService } from './services/http-component-interop/http-component-interop.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { HttpComponent } from './components/http/http.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [HttpComponentInteropService],
  declarations: [NgrxComponent, HttpComponent, MainInfoComponent]
})
export class ContentModule {}
