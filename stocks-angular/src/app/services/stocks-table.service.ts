import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Stock} from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksTableService {

  private dataSource: Array<any>;
  private tableHeaders: Array<string> = ['Stock', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  private subject = new Subject<any>();

  constructor() { }

  setDataSource(dataSource: Observable<any>) {
    dataSource.subscribe((data) => {
      this.dataSource = data.stocks;
    });
  }

  getDataSource(): Array<any> {
    return this.dataSource;
  }

  getTableHeaders() {
    return this.tableHeaders;
  }

  getSubject() {
    return this.subject.asObservable();
  }

  onRowAdded(stock: Stock) {
    this.subject.next({ newRow: stock });
  }
}
