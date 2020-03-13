import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioDetailsComponent,
    PortfolioListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
