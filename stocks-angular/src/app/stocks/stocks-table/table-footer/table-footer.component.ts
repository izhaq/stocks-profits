import { Component, OnInit } from '@angular/core';
import {StocksTableService} from '../../../services/stocks-table.service';
import {Stock} from '../../../models/stock';

@Component({
  selector: 'app-table-fotter',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  private isEditMode = false;
  private stock: Stock;

  constructor(private tableService: StocksTableService) {
    this.refresh();
  }

  ngOnInit() {
  }

  refresh() {
    this.stock = new Stock();
    this.stock.prices = [];
    this.isEditMode = false;
  }

  get newRowInputs() {
    return this.tableService.getTableHeaders();
  }

  get editMode() {
    return this.isEditMode;
  }

  switchToEdit() {
    this.isEditMode = !this.isEditMode;
  }

  submitRow() {
    this.tableService.notifyOnTableEvents('row-added', this.stock);
    this.refresh();
  }

  cancel() {
    this.refresh();
  }

  onChange($event, i) {
    if (i === 0) {
      this.stock.name = $event.target.value;
    } else {
      this.stock.prices[i - 1] = $event.target.value;
    };
  }
}
