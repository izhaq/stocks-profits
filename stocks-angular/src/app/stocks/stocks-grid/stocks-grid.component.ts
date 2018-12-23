import {Component, OnInit} from '@angular/core';
import {StocksTableService} from '../../services/stocks-table.service';

@Component({
    selector: 'app-stocks-grid',
    templateUrl: './stocks-grid.component.html',
    styleUrls: ['./stocks-grid.component.scss']
})
export class StocksGridComponent implements OnInit {

    constructor(private tableService: StocksTableService) {
    }

    ngOnInit() {
        /*this.tableService.getDataSource().subscribe((stocks) => {
            console.log(stocks);
        });*/
    }
}
