import {StockProfitsPrices} from "./stocksProfitsPrices.model";

export class StocksResponse{
    stocks: Array<StockProfitsPrices>;

    constructor(){
        this.stocks = new Array<StockProfitsPrices>();
    }
}