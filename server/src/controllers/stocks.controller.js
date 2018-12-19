import StocksService from './../model/stocks.service';

export default class StocksController{
    constructor(){
        this.stocksService = new StocksService();
        /*let db = this.stocksService.stockDb;
        console.log("helllllllo");
        let collection = db.get('stocks');
        console.log("collection ",collection);
        collection.find({name: "Elbit"},{},(e,docs)=>{
            console.log("helllllllo again");
            console.log(docs);
        });*/
    }
}