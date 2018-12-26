import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {from, Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


@Injectable()
export class MockedDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
    return of({});
  }

  get(reqInfo: RequestInfo) {
    // need headers so casting reqInfo to any; see https://github.com/angular/in-memory-web-api/issues/156
    const rq: any = reqInfo as any;
    const url: string = rq.url;
    const headers = rq.req.headers;

    if (reqInfo.apiBase !== 'api/') {
      return null;
    }

    if (url.includes('api/stocks')) {
      return this.responseFromJson(reqInfo, 'getStocksResponse');
    }
    return this.statusOnlyResponse(reqInfo, STATUS.NOT_FOUND);
  }

  post(reqInfo: RequestInfo) {
    // need body so casting reqInfo to any
    const rq: any = reqInfo as any;
    const url: string = rq.url;
    const body = rq.req.body;

    if (reqInfo.apiBase !== 'api/') {
      return null;
    }

    if (url.includes('api/addStocks')) {
      return this.responseFromJson(reqInfo, 'addStocksResponse');
    }

    return this.statusOnlyResponse(reqInfo, STATUS.NOT_FOUND);
  }

  private statusOnlyResponse(reqInfo: RequestInfo, status: number): Observable<any> {
    return reqInfo.utils.createResponse$(() => {
      return this.finishOptions({
        status: status
      }, reqInfo);
    });
  }

  private responseFromJson(reqInfo: RequestInfo, responseId: string): Observable<any> {
    const jsonUrl = `./mock-server/json-responses/${responseId}.json`;

    return from(fetch(jsonUrl))
      .pipe(
        mergeMap(response => response.json()),
        mergeMap((response) => {
          let results: any;
          results = response;
          if (reqInfo.method === 'post' && reqInfo.collectionName === 'addStocks') {
            results.stocks[0].stock.name = reqInfo.utils.getJsonBody(reqInfo.req).stock.name || results.stocks[0].stock.name;
            results.stocks[0].stock.prices = (reqInfo.utils.getJsonBody(reqInfo.req).stock.prices && reqInfo.utils.getJsonBody(reqInfo.req).stock.prices.length > 0) ?
                reqInfo.utils.getJsonBody(reqInfo.req).stock.prices : results.stocks[0].stock.prices;
          }
          return reqInfo.utils.createResponse$(() => {
            return this.finishOptions({
              body: results,
              status: STATUS.OK
            }, reqInfo);
          });
        })
      );
  }

  protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {
    console.log('res.body  :  ', res.body);
    return res;
  }

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }

}
