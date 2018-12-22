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
        let newStock = new stocksModel({
            name: "Amdocs",
            prices: [500,180,260,310,40,535,695]
        });

        newStock.save((err, stock) => {
            if(err){
                res.send(err);
            }    
            res.json(stock);
        });
    }

    public getStocks (req: Request, res: Response) {
        stocksModel.find({}, (err, stocks) => {
            if(err){
                res.send(err);
            }

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