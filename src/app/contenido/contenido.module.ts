import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModelModule } from '../app-model/app-model.module';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    AppModelModule
  ],
  declarations: [
    InfoComponent,
    AboutComponent
  ],
  exports: [
    AboutComponent,
    InfoComponent
  ]
})
export class ContenidoModule { }
