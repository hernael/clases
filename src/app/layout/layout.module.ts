import { NgModule } from '@angular/core';
import { LayoutNavComponent } from './nav/layout-nav.component';
import { LayoutFooterComponent } from './footer/layout-footer.component';
import { LayoutHeaderComponent } from './header/layout-header.component';

@NgModule({
  declarations: [
    LayoutNavComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent
  ],
  exports: [
    LayoutFooterComponent,
    LayoutNavComponent,
    LayoutHeaderComponent
  ]
})
export class LayoutModule { }
