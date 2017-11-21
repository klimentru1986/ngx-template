import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

/** Абстракция над HttpClient */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /** Метод get возвращает observable */
  public getObservable<T>(url: string, options?: any): Observable<T> {
    return this.http
      .get<T>(url)
      .map(response => response as T)
      .catch(error => this.handleError('error', error));
  }

  private handleError<T>(operation = 'operation', error?: T): Observable<T> {
    // return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(error as T);
  }
}
