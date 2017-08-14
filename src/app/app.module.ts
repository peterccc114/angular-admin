import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { SidebqrComponent } from './sidebqr/sidebqr.component';
import { SidebarComponent } from './pagelayout/src/app/pagelayout/sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    PagelayoutComponent,
    SidebqrComponent,
    SidebarComponent,
    TablesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
