import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutNavComponent } from './nav/layout-nav.component';
import { LayoutFooterComponent } from './footer/layout-footer.component';
import { LayoutHeaderComponent } from './header/layout-header.component';

@NgModule({
  imports: [
    RouterModule
  ],
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
