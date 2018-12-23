import {Observable} from 'rxjs';
import {StocksResponse} from './stocks-response';

export class AppState {
    stocksData: Observable<StocksResponse>;
}
