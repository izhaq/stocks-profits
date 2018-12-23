import {Request, Response, NextFunction} from "express";
import {StockController} from "../controllers/stocksController";

export class StockRoutes {

    public stockController: StockController = new StockController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // stocks
        app.route('/api/stocks')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware to make authentication
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                next();
            }, this.stockController.getStocks);



            // POST endpoint
        app.route('/api/addStocks')
            .post(this.stockController.addNewStock);

        // // Contact detail
        // app.route('/contact/:contactId')
        // // get specific contact
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact)

    }
}
