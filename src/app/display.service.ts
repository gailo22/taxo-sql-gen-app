import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DisplayService {

  listners = new Subject<any>();
  
  listen(): Observable<any> {
      return this.listners.asObservable();
  }

  constructor() { }

  setResult(result) {
    this.listners.next(result);
  }

}
