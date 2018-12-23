import { Component, OnInit } from '@angular/core';
import {StocksTableService} from '../../../services/stocks-table.service';
import {Stock} from '../../../models/stock';

@Component({
  selector: 'app-table-fotter',
  templateUrl: './table-fotter.component.html',
  styleUrls: ['./table-fotter.component.scss']
})
export class TableFotterComponent implements OnInit {

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
    this.tableService.onRowAdded(this.stock);
    this.refresh();
  }

  cancel() {
    this.refresh();
  }

  onChange($event, i) {
    this.stock.prices[i] = $event.target.value;
  }
}
