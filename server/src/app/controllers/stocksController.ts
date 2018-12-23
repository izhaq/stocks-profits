import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import {StocksResponse} from "../models/stocksResponse.model";
import  MaximumProfitStockCalculatorService from "../services/maxProfitStockCalculator.service";
import {StocksSchema} from "../models/stocksSchema.modle";


const stocksModel = mongoose.model('stocks', StocksSchema);

export class StockController{

    private profitCalcSrv: MaximumProfitStockCalculatorService;

    constructor() {
        this.profitCalcSrv = new MaximumProfitStockCalculatorService();
    }

    public addNewStock (req: Request, res: Response) {
        const stockToAdd = req.body.stock;
        let newStock = new stocksModel(stockToAdd);

        newStock.save((err, stock) => {
            if(err){res.send(err);}

            const response: StocksResponse = this.profitCalcSrv.calculateMaximumStocksProfit([stock]);
            res.json(response);
        });
    }

    public getStocks (req: Request, res: Response) {


        stocksModel.find({}, (err, stocks) => {
            if(err){res.send(err);}

            const response: StocksResponse = this.profitCalcSrv.calculateMaximumStocksProfit(stocks);
            res.json(response);
        });
    }
}
