import {Component, OnInit} from '@angular/core';
import {StocksService} from './services/stocks.service';
import {StocksResponse} from './models/stocks-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stocks-angular';

  constructor(private service: StocksService) {}

  ngOnInit() {
  /*  this.service.addStock().subscribe((stocks: StocksResponse) => {
      console.log(stocks);
    });*/
  }
}
