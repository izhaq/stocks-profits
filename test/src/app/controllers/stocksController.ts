import * as mongoose from 'mongoose';
//import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Schema = mongoose.Schema;

const stocks = new Schema({
    name: String,
    prices: Array
}, {collection: 'stocks'});

const Stocks = mongoose.model('stocks', stocks);

export class StockController{

    public addNewStock (req: Request, res: Response) {
        let newStock = new Stocks({
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
        Stocks.find({}, (err, stock) => {
            if(err){
                res.send(err);
            }
            res.json(stock);
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