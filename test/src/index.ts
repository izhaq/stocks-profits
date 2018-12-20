/*const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net/StocksDb"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("StocksDb").collection("stocks");
   // perform actions on the collection object
   client.close();
});
*/
import express from 'express';
import mongodb from 'mongodb';
const app = express();
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const port = 3000;
const mongo_uri = 'mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net';

app.get('/', (req, res) => {
  MongoClient.connect(mongo_uri, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('StocksDb');
    const collection = db.collection('stocks');
	console.log("live ");
    collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
  });
});

/*
app.get('/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  MongoClient.connect(mongo_uri, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('my-db');
    const collection = db.collection('my-collection');
    collection.findOne({ _id: id }).then(response => res.status(200).json(response)).catch(error => console.error(error));
  });
});
*/

app.listen(port, () => console.info(`REST API running on port ${port}`));