import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subscription} from 'rxjs';
import {StocksResponse} from '../models/stocks-response';
import {AppState} from '../models/app-state';
import {AddStockRequest} from '../models/add-stock-request';
import {Stock} from '../models/stock';
import {StocksTableService} from './stocks-table.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private getStocksUrl = 'api/stocks';
  private addStockUrl = 'api/addStocks';
  private  state: AppState;
  private tableChangedSubscription: Subscription;

  constructor(private http: HttpClient, private stockTableService: StocksTableService) {
    this.state = new AppState();
    this.init();
  }

  init() {
    this.setStocks();
    this.initTableService();
    this.tableChangedSubscription = this.stockTableService.getSubject().subscribe((newStock) => {
      this.addStock(newStock);
    });
  }

  setStocks(): void {
    this.state.stocksData = this.http.get<StocksResponse>(this.getStocksUrl);
  }

  getStocks(): Observable<StocksResponse> {
    return this.state.stocksData;
  }

  initTableService() {
    this.stockTableService.setDataSource(this.state.stocksData);
  }

  addStock(stock: Stock): Observable<StocksResponse> {
    const request = new AddStockRequest();
    request.stock = new Stock();
    request.stock.name = 'Coca Cola';
    request.stock.prices = [200, 50, 800, 800, 900, 30, 150];

    return this.http.post<StocksResponse>(this.addStockUrl, request, httpOptions);
  }
}
