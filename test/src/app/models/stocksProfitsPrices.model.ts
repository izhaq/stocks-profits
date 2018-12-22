import {Stock} from "./stock.model";
import {ProfitPoints} from "./profitPoints.model";

export class StockProfitsPrices{
    stock: Stock;
    profitPoints: Array<ProfitPoints>;

    constructor(stock: Stock, profitPoints: Array<ProfitPoints>){
        this.stock = stock;
        this.profitPoints = profitPoints;
    }
}