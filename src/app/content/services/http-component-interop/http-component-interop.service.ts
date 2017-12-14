import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../../models/response.model';
import { HttpService } from '../../../core/services/http/http.service';

/** Пример сервиса с AJAX запросом */
@Injectable()
export class HttpComponentInteropService {
  constructor(private http: HttpService) {}

  /** Пример получения Observable */
  getAsObservable(): Observable<ResponseModel> {
    return this.http.getObservable('http://api.icndb.com/jokes/random/5');
  }

  /** Пример получения Promise */
  getAsPromise(): Promise<ResponseModel> {
    return this.http.getPromise('http://api.icndb.com/jokes/random/5');
  }
}
