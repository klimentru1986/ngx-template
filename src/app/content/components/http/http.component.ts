import { HttpComponentInteropService } from './../../services/http-component-interop/http-component-interop.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponseModel } from '../../models/response.model';
import { MockUser } from '../../models/mock-user.model';

import 'rxjs/add/operator/first';

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
  /** Подписка на получение данных */
  private dataSubscription: Subscription;
  /** получение мокового списка пользователей */
  public mockUsers: MockUser[];
  /** Сообщение об ошибке */
  public error: string;

  /** Событие жизненного цикла */
  ngOnInit() {
    this.getDataFromObservable();
    this.getMockUsers();
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

  /** Получение данных с мокового сервера */
  private getMockUsers(): void {
    this.httpInterop
      .getMockUsers()
      .first()
      .subscribe(
        users => {
          this.error = null;
          this.mockUsers = users;
        },
        err => {
          console.error(err);
          this.error = 'Что-то пошло не так. Сервер отключен';
        }
      );
  }
}
