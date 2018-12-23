import { Component} from '@angular/core';
import {StocksTableService} from '../../../services/stocks-table.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {

  constructor(private tableService: StocksTableService) { }

  getTableData() {
    return this.tableService.getDataSource();
  }

}
