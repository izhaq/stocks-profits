import {Injectable} from '@angular/core';

@Injectable()
export class LoadingBarService {

    private requestsCount: number;

    constructor() {
        this.requestsCount = 0;
    }

    addRequest() {
        this.requestsCount++;
    }

    removeRequest() {
        this.requestsCount--;
    }

    setRequestObs(obs) {
        console.log(obs);
    }

    showLoadingBar() {
        return this.requestsCount > 0;
    }

}
