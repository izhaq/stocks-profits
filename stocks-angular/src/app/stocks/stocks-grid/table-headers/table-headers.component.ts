import { Component, OnInit } from '@angular/core';
import {StocksTableService} from '../../../services/stocks-table.service';

@Component({
  selector: 'app-table-headers',
  templateUrl: './table-headers.component.html',
  styleUrls: ['./table-headers.component.scss']
})
export class TableHeadersComponent implements OnInit {

  constructor(private tableService: StocksTableService) { }

  ngOnInit() {
  }

  get tableHeaders() {
    return this.tableService.getTableHeaders();
  }
}
