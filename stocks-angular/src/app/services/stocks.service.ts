import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subscription} from 'rxjs';
import {StocksResponse} from '../models/stocks-response';
import {AppState} from '../models/app-state';
import {AddStockRequest} from '../models/add-stock-request';
import {Stock} from '../models/stock';
import {StocksTableService} from './stocks-table.service';
import {TableEventsService} from './table-events.service';
import {ChartsEventsService} from '../shared-components/charts-module/services/charts-events.service';

const GET_STOCK_URL = 'api/stocks';
const ADD_STOCK_URL = 'api/addStocks';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private getStocksUrl = 'api/stocks';
  private addStockUrl = 'api/addStocks';
  private  state: AppState;

  constructor(private http: HttpClient, private stockTableService: StocksTableService,
              private eventService: TableEventsService,
              private chartEventService: ChartsEventsService) {
    this.state = new AppState();
    this.init();
  }

  init() {
    this.setStocks();
    this.initTableService();
    this.listenToTableEvents();
  }

  listenToTableEvents() {
    this.eventService.getMessage().subscribe((dataObject) => {
      if (dataObject.message === 'row-added') {
        this.notifyOnTableEvents('row-added-db', this.addStock(dataObject.data));
      }
      if (dataObject.message === 'row-selected') {
        this.chartEventService.sendMessage('row-selected',
            {labels: null, label: dataObject.data.stock.name, values: dataObject.data.stock.prices});
      }
    });
  }

  notifyOnTableEvents(message: string, data: any) {
    this.eventService.sendMessage(message, data);
  }

  setStocks(): void {
    this.state.stocksData = this.http.get<StocksResponse>(this.getStocksUrl);
  }

  initTableService() {
    this.stockTableService.setDataSource(this.state.stocksData);
  }

  addStock(stock: Stock): Observable<StocksResponse> {
    const request = new AddStockRequest();
    request.stock = stock;

    return this.http.post<StocksResponse>(this.addStockUrl, request);
  }
}
