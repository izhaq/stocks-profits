import * as express from "express";
import * as bodyParser from "body-parser";
import { StockRoutes } from "./routes/stocksRoutes";
import * as mongoose from "mongoose";

class App {

  public app: express.Application;
  public routes: StockRoutes = new StockRoutes();
  // public mongoUrl: string = 'mongodb://localhost/CRMdb';
  public mongoUrl: string = 'mongodb+srv://izhaq:11072017@baroz01-s5luy.gcp.mongodb.net/StocksDb';//'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.app.use(express.static('public'));
  }

  private mongoSetup(): void{
    //mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log('Conntected To Mongo Database');
    });
  }

}

export default new App().app;

/*
import createError from'http-errors';
import * as express from 'express';
import indexRouter from './routes';
import ApiRouting from './routes/api.routing';
import AppConfiguration from './configuration/app.configuration';

const app = express();
AppConfiguration.setGlobalConfiguration(app);
const apiRouter = new ApiRouting();

app.use('/', indexRouter);
app.use('/api', apiRouter.getApiRouter());

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err: any, req, res, next)=>  {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
*/
