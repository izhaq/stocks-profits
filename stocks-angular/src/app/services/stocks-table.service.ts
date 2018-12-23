import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Stock} from '../models/stock';
import {TableEventsService} from './table-events.service';
import {TableState} from '../models/table-state';

const TABLE_HEADERS = ['Stock', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

@Injectable({
    providedIn: 'root'
})
export class StocksTableService {

    private tableState: TableState;

    constructor(private eventService: TableEventsService) {
        this.init();
    }

    init() {
        this.tableState = new TableState();
        this.tableState.tableHeaders = TABLE_HEADERS;
        this.tableState.selectedRow = 0;
        this.listenToTableEvents();
    }

    listenToTableEvents() {
        this.eventService.getMessage().subscribe((dataObject) => {
            if (dataObject.message === 'refresh') {
                this.setDataSource(dataObject.data);
            }
            if (dataObject.message === 'row-added-db') {
                this.addNewRow(dataObject.data);
            }
        });
    }

    notifyOnTableEvents(message: string, data: any) {
        this.eventService.sendMessage(message, data);
    }

    setDataSource(dataSource: Observable<any>) {
        dataSource.subscribe((data) => {
            this.tableState.dataSource = data.stocks;
        });
    }

    addNewRow(dataRow: Observable<any>) {
        dataRow.subscribe((data) => {
            this.tableState.dataSource = data.stocks.concat(this.tableState.dataSource);
        });
    }

    getDataSource(): Array<any> {
        return this.tableState.dataSource;
    }

    getTableHeaders() {
        return this.tableState.tableHeaders;
    }

    get selectedRow() {
        return this.tableState.selectedRow;
    }
}
