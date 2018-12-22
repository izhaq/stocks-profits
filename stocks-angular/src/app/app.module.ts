import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {ExternalLibrariesModule} from './external-libraries/external-libraries.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksGridComponent } from './stocks/stocks-grid/stocks-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ExternalLibrariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
