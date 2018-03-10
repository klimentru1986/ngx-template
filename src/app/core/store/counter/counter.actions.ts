import { Action } from '@ngrx/store';

/** Действия для счетчика */
export enum CounterActionTypes {
  plus = 'Counter Actions [plus]',
  reset = 'Counter Actions [reset]'
}

export class CounterPlussAction implements Action {
  readonly type = CounterActionTypes.plus;
}

export class CounterResetAction implements Action {
  readonly type = CounterActionTypes.reset;
}

export type CounterActions = CounterPlussAction | CounterResetAction;
