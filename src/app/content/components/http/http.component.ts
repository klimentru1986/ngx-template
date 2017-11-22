import { HttpComponentInteropService } from './../../services/http-component-interop/http-component-interop.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponseModel } from '../../models/response.model';

/** Компонент с примером http запроса */
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {
  constructor(private httpInterop: HttpComponentInteropService) {}
  /** респонс для observable запроса */
  public responseFromObservable: ResponseModel;
  /** респонс для promise запроса */
  public responseFromPromise: ResponseModel;

  /** Подписка на получение данных */
  private dataSubscription: Subscription;

  /** Событие жизненного цикла */
  ngOnInit() {
    this.getDataFromObservable();
    this.getDataFromPromise();
  }

  /** Событие жизненного цикла */
  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  /** Получение данных из observable запроса */
  getDataFromObservable(): void {
    this.dataSubscription = this.httpInterop
      .getAsObservable()
      .subscribe(response => (this.responseFromObservable = response));
  }

  /** Получение данных из promise запроса */
  getDataFromPromise(): void {
    this.httpInterop.getAsPromise().then(response => (this.responseFromPromise = response));
  }
}
