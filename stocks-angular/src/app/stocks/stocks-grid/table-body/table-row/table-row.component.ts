import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() rowData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.rowData);
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

}
