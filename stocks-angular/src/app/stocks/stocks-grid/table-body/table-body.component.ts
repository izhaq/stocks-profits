import { Component, OnInit } from '@angular/core';
import {StocksTableService} from '../../../services/stocks-table.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

  private tableData: Array<any>
  constructor(private tableService: StocksTableService) { }

  ngOnInit() {
    /*this.tableService.getDataSource().subscribe((data) => {
      this.tableData = data;
    });*/
  }

  getTableData() {
    return this.tableService.getDataSource();
  }

}
