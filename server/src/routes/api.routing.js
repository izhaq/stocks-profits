import express from 'express';
import StocksController from './../controllers/stocks.controller';

export default class ApiRouting{

  constructor(){
    this.apiRouter = express.Router();
    this.stocksCtrl = new StocksController();
    this.initRouting();
  }

  initRouting(){
    /* GET users listing. */
    this.apiRouter.get('/', function(req, res, next) {
      res.send('respond with a resource');
    });

    this.apiRouter.get('/test', function(req, res, next) {
      res.send('respond with a resource test');
    });

    this.apiRouter.get('/test/:stockId', function(req, res, next) {
      res.json({urlParam: req.params.stockId});
      //res.send('respond with a resource stockId ' + req.params.stockId);
    });
  }

  getApiRouter(){
    return this.apiRouter;
  }
}
