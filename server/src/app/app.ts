import * as express from "express";
import * as bodyParser from "body-parser";
import { StockRoutes } from "./routes/stocksRoutes";
import * as mongoose from "mongoose";

class App {

  public app: express.Application;
  public routes: StockRoutes = new StockRoutes();
  public mongoUrl: string = 'mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net/StocksDb';

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('public'));
  }

  private mongoSetup(): void{
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log('Connected To Mongo Database');
    });
  }

}
export default new App().app;
