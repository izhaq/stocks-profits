// New Code
import mongo from 'mongodb';
//import monk from 'monk';
const MongoClient = mongo.MongoClient;
//const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
const mongodbUri = "mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net/StocksDb?retryWrites=true";
const client = new MongoClient(mongodbUri, { useNewUrlParser: true });


//const mongodbUri = "mongodb+srv://izhaq:noaB1107$@baroz01-s5luy.gcp.mongodb.net/StocksDb?retryWrites=true"

export default class StocksService{
    constructor(){
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net/";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("StocksDb").collection("stocks");
            console.log("collection : ",collection);
            collection.find({},{},function(e,docs){
                console.log("the docs are !!!! :", docs);
            });
            // perform actions on the collection object
            client.close();
        });

/*        MongoClient.connect(mongodbUri, function(err, db) {
            console.log("db : ",db);
            const collection = client.db("StocksDb").collection("stocks");
            console.log("////////////////////////////////////////////////");
            console.log("collection : ",collection);
            db.close();
        })/!*.then(res => {
            console.log("db response: ", res);
        });*!/*/
    }
    get stockDb(){
        return this.stocksDb;
    }
}