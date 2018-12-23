import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksGridComponent } from './stocks/stocks-table/stocks-grid.component';
import { TableHeadersComponent } from './stocks/stocks-table/table-headers/table-headers.component';
import { TableBodyComponent } from './stocks/stocks-table/table-body/table-body.component';
import { TableFooterComponent } from './stocks/stocks-table/table-footer/table-footer.component';
import { TableRowComponent } from './stocks/stocks-table/table-body/table-row/table-row.component';
import {SharedComponentsModule} from './shared-components/shared-components.module';
import {LoadingBarService} from './shared-components/loading-bar/services/loading-bar.service';
import {HeaderInterceptor} from './services/header-interceptor.service';
import {CostumeChartsModule} from './shared-components/charts-module/costume-charts.module';



@NgModule({
  declarations: [
    AppComponent,
    StocksGridComponent,
    TableHeadersComponent,
    TableBodyComponent,
    TableFooterComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    CostumeChartsModule.forRoot()
  ],
  providers: [
    LoadingBarService,
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
