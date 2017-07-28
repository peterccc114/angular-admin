import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SidebarComponent }   from './sidebar/sidebar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, HeaderbarComponent],
  exports: [SidebarComponent, HeaderbarComponent]
})
export class PagelayoutModule { }
