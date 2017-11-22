import { Action } from '@ngrx/store';
import { CounterActions } from './counter.actions';

const DEFAULT_STATE = 0;

/** Редюсер для счетчика */
export function counterReducer(state: number = DEFAULT_STATE, action: Action): number {
  switch (action.type) {
    case CounterActions.reset:
      return DEFAULT_STATE;
    case CounterActions.pluss:
      return state + 1;
    default:
      return state;
  }
}
