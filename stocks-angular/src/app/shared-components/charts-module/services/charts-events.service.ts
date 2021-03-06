import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ChartsEventsService {
  private subject = new Subject<any>();

  constructor() { }

  getMessage() {
    return this.subject.asObservable();
  }

  clearMessages() {
    this.subject.next();
  }

  sendMessage(message: string , newData: any) {
    this.subject.next({message: message, data: newData });
  }
}
