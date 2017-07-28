import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';

import { AppComponent }        from './app.component';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { HeaderBarComponent }  from './pagelayout/header-bar/header-bar.component';
import { SideBarComponent }    from './pagelayout/side-bar/side-bar.component';
import { SidebarService }      from './sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    PagelayoutComponent,
    HeaderBarComponent,
    SideBarComponent,
    SidebarService
  ],
  imports: [
    BrowserModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
