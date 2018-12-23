import { Component, OnInit, Input } from '@angular/core';
import {StocksTableService} from '../../../../services/stocks-table.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() rowData: any;
  @Input() index;
  constructor(private tableService: StocksTableService ) {
  }

  ngOnInit() {
    if (this.tableService.selectedRow === this.index) {
      this.onRowSelected();
    }
  }

  cellMarked(index) {
    for (const point of this.rowData.profitPoints) {
      if (point.buy === index) {
        return 'buy';
      }
      if (point.sell === index) {
        return 'sell';
      }
    }
    return '';
  }

  onRowSelected() {
    this.tableService.notifyOnTableEvents('row-selected', this.rowData);
  }

}
