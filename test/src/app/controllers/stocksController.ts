import * as mongoose from 'mongoose';
//import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';
import {StocksResponse} from "../models/stocksResponse.model";
import MaximumProfitStockCalculatorService from "../services/maxProfitStockCalculator.service";


const Schema = mongoose.Schema;
const stocksSchema = new Schema({name: String, prices: Array}, {collection: 'stocks'});
const stocksModel = mongoose.model('stocks', stocksSchema);

export class StockController{

    public addNewStock (req: Request, res: Response) {
        const stockToAdd = req.body.stock;
        let newStock = new stocksModel(stockToAdd);

        //console.log(stockToAdd);
        //console.log(newStock);
        newStock.save((err, stock) => {
            if(err){
                res.send(err);
            }
            console.log(stock);
            const service = new MaximumProfitStockCalculatorService();
            const response: StocksResponse = service.calculateMaximumStocksProfit([stock]);
            res.json(response);
        });
    }

    public getStocks (req: Request, res: Response) {
        stocksModel.find({}, (err, stocks) => {
            if(err){
                res.send(err);
            }
            debugger;
            const service = new MaximumProfitStockCalculatorService();
            const response: StocksResponse = service.calculateMaximumStocksProfit(stocks);
            res.json(response);
        });
    }
/*
    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }*/
    
}
