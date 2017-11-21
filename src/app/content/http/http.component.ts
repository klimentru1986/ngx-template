import { HttpService } from './../../shared/services/http/http.service';
import { Component, OnInit } from '@angular/core';

/** Компонент с примером http запроса */
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http
      .getObservable('https://api.punkapi.com/v2/beers')
      .subscribe(response => console.log(response));
  }
}
