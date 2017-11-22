import { Observable } from 'rxjs/Observable';
import { HttpService } from './../../../shared/services/http/http.service';
import { Injectable } from '@angular/core';

/** Пример сервиса с AJAX запросом */
@Injectable()
export class HttpComponentInteropService {
  constructor(private http: HttpService) {}

  /** Пример получения Observable */
  getAsObservable(): Observable<any> {
    return this.http.getObservable('http://api.icndb.com/jokes/random/5');
  }

  /** Пример получения Promise */
  getAsPromise(): Promise<any> {
    return this.http.getPromise('http://api.icndb.com/jokes/random/5');
  }
}
