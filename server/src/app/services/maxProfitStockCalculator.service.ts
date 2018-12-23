import {ProfitPoints} from "../models/profitPoints.model";
import {Stock} from "../models/stock.model";
import {StocksResponse} from "../models/stocksResponse.model";
import {StockProfitsPrices} from "../models/stocksProfitsPrices.model";

export default class MaximumProfitStockCalculatorService{
    constructor(){}

    calculateMaximumStocksProfit(stocks: Array<any>){
        const stocksResponse: StocksResponse = new StocksResponse();

        for(let stock of stocks){
            const stockProfitPoints: Array<ProfitPoints> = this.calculateMaximumStockProfit(stock);
            stocksResponse.stocks.push(new StockProfitsPrices(stock, stockProfitPoints));
        }

        return stocksResponse;
    }

    calculateMaximumStockProfit(stock: Stock){

        const stockProfitPoints: Array<ProfitPoints> = new Array<ProfitPoints>();

        //edge case - if price was given for only one day or less, return
        if(stock.prices.length <= 1){
            return stockProfitPoints
        }

        for(let day = 0; day < stock.prices.length - 1; day++){
            const dayToBuy = this.findBuyingPoint(day, stock);

            if(day === (stock.prices.length - 1)){
                return stockProfitPoints;
            }

            const profitPoint = new ProfitPoints();
            profitPoint.buy = dayToBuy;

            const dayToSell = this.findSellingPoint(dayToBuy+1, stock);
            profitPoint.sell = dayToSell;

            stockProfitPoints.push(profitPoint);
            day = dayToSell;
        }

        return stockProfitPoints;
    }

    //Find buying day(find min) from a given day
    findBuyingPoint(dayToBuy: number, stock: Stock){
        while ((dayToBuy< stock.prices.length - 1) && (stock.prices[dayToBuy + 1] <= stock.prices[dayToBuy]))
            dayToBuy++;

        return dayToBuy;
    }

    //Find selling day(find min) from a given day
    findSellingPoint(dayToSell: number, stock: Stock){
        while ((dayToSell < stock.prices.length) && (stock.prices[dayToSell] >= stock.prices[dayToSell - 1]))
            dayToSell++;

        return dayToSell-1;
    }
}