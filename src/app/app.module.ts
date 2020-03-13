import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
