import {Request, Response, NextFunction} from "express";
import {StockController} from "../controllers/stocksController";

export class StockRoutes {

    public stockController: StockController = new StockController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Server is up !'
                })
            })

        // get all stocks
        app.route('/api/stocks')
            .get(this.stockController.getStocks.bind(this.stockController));

        // POST endpoint
        app.route('/api/addStocks')
            .post(this.stockController.addNewStock.bind(this.stockController));
    }
}
