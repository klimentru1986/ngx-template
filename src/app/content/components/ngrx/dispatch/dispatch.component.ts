import { Component, OnInit } from '@angular/core';
import { CounterActions } from '../../../../core/store/counter/counter.actions';
import { ReduxService } from '../../../../core/services/redux/redux.service';

/** Компонент распространяющий события */
@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {
  constructor(private redux: ReduxService) {}

  ngOnInit() {}

  /** Добавляет счетчик */
  public plus(): void {
    this.redux.dispatchAction(CounterActions.plus);
  }

  public reset(): void {
    this.redux.dispatchAction(CounterActions.reset);
  }
}
