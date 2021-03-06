import { Component, OnInit } from '@angular/core';

import { HttpComponentInteropService } from './../../services/http-component-interop/http-component-interop.service';
import { ResponseModel } from '../../models/response.model';
import { MockUser } from '../../models/mock-user.model';

import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

/** Компонент с примером http запроса */
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  constructor(private httpInterop: HttpComponentInteropService) {}
  /** респонс для observable запроса */
  public responseFromObservable$: Observable<ResponseModel>;
  /** получение мокового списка пользователей */
  public mockUsers: MockUser[];
  /** Сообщение об ошибке */
  public error: string;

  /** Событие жизненного цикла */
  ngOnInit() {
    this.responseFromObservable$ = this.getDataFromObservable();
    this.getMockUsers();
  }

  /** Получение данных из observable запроса */
  getDataFromObservable(): Observable<ResponseModel> {
    return this.httpInterop.getAsObservable();
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
