import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';

/** Абстракция над HttpClient */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /** Метод get возвращает observable<T> */
  public getObservable<T>(url: string, options?: any): Observable<T> {
    return <Observable<T>>this.http
      .get<T>(url)
      .map(response => response as T)
      .catch(this.handleError);
  }

  /** Метод get возвращает promise<T> */
  public getPromise<T>(url: string, options?: any): Promise<T> {
    return <Promise<T>>this.http
      .get<T>(url)
      .map(response => response as T)
      .toPromise()
      .catch(this.handleError);
  }

  /** Метод post возвращает observable<T> */
  public postObservable<T>(url: string, data: any, options?: any): Observable<T> {
    return <Observable<T>>this.http
      .post<T>(url, data)
      .map(response => response as T)
      .catch(this.handleError);
  }

  /** Метод post возвращает promise<T> */
  public postPromise<T>(url: string, data: any, options?: any): Promise<T> {
    return <Promise<T>>this.http
      .post<T>(url, data)
      .map(response => response as T)
      .toPromise()
      .catch(this.handleError);
  }

  /** TODO если необходимо, то добавить PUT, DELETE */

  /** Обработчик ошибок */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error);
  }
}
