import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { STORE_NAMES } from '../../../../core/store/store-names';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ReduxService } from '../../../../core/services/redux/redux.service';

/** Компонент подписаный на события */
@Component({
  selector: 'app-store-subscribe',
  templateUrl: './store-subscribe.component.html',
  styleUrls: ['./store-subscribe.component.scss']
})
export class StoreSubscribeComponent implements OnInit, OnDestroy {
  public counter: number;

  private counterSubscription: Subscription;

  constructor(private redux: ReduxService) {}

  ngOnInit() {
    this.subscribeToCounter();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  private subscribeToCounter(): void {
    this.counterSubscription = this.redux.selectStore(STORE_NAMES.counter).subscribe(value => (this.counter = value));
  }
}
