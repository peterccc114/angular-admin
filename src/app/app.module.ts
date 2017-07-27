import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { HeaderBarComponent } from './pagelayout/src/app/pagelayout/header-bar/header-bar.component';
import { SideBarComponent } from './pagelayout/src/app/pagelayout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PagelayoutComponent,
    HeaderBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
