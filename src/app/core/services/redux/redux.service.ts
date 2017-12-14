import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/** Абстракция над ngrx */
@Injectable()
export class ReduxService {
  constructor(private store: Store<any>) {}
  /**
   * Возвращает выбраное хранилище
   * @param storeName - имя хранилища
   * @returns {Observable<R>} - возвращает observable данного хранилища
   */
  selectStore(storeName): Observable<any> {
    return this.store.select(storeName);
  }

  /**
   * Обновление состояния хранилища
   * @param actionType - тип действия
   * @param payload - измененные данные(если они есть)
   */
  dispatchAction(actionType, payload?) {
    if (!payload) {
      this.store.dispatch({ type: actionType });
    } else {
      this.store.dispatch({ type: actionType, payload: payload });
    }
  }
}
