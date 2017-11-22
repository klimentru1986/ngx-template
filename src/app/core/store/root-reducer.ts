import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

/** Интер */
export interface State {
  counter: number;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};
