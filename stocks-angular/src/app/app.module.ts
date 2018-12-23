import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExternalLibrariesModule} from './external-libraries/external-libraries.module';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksGridComponent } from './stocks/stocks-grid/stocks-grid.component';
import { TableHeadersComponent } from './stocks/stocks-grid/table-headers/table-headers.component';
import { TableBodyComponent } from './stocks/stocks-grid/table-body/table-body.component';
import { TableFotterComponent } from './stocks/stocks-grid/table-fotter/table-fotter.component';
import { TableRowComponent } from './stocks/stocks-grid/table-body/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksGridComponent,
    TableHeadersComponent,
    TableBodyComponent,
    TableFotterComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExternalLibrariesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
