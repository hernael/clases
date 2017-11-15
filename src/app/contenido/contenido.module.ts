import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';

@NgModule({
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
