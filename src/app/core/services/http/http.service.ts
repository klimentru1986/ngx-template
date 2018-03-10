import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

/** Абстракция над HttpClient */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /** Метод get возвращает observable<T> */
  public getObservable<T>(url: string, options?: any): Observable<T> {
    return <Observable<T>>this.http.get<T>(url, options).pipe(catchError(this.handleError));
  }

  /** Метод post возвращает observable<T> */
  public postObservable<T>(url: string, data: any, options?: any): Observable<T> {
    return <Observable<T>>this.http.post<T>(url, data, options).pipe(catchError(this.handleError));
  }

  /** Обработчик ошибок */
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error);
  }
}
