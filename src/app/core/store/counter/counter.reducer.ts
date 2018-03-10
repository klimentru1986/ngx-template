import { Action } from '@ngrx/store';
import { CounterActions, CounterActionTypes } from './counter.actions';

const DEFAULT_STATE = 0;

/** Редюсер для счетчика */
export function counterReducer(state: number = DEFAULT_STATE, action: CounterActions): number {
  switch (action.type) {
    case CounterActionTypes.reset:
      return DEFAULT_STATE;
    case CounterActionTypes.plus:
      return state + 1;
    default:
      return state;
  }
}
