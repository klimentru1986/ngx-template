# Шаблон Angular 5 + ngrx(redux) с основными модулями

## Установка

Обязательно должен быть установлен [Node.js](https://nodejs.org/en/)

Установить глобально typeScript
```sh
$ npm install -g typescript
```
Установить глобально angular-cli
```sh
$ npm install -g @angular/cli
```
Клонировать проект и установить зависимости
```sh
$ git clone https://github.com/klimentru1986/ngx-template.git
$ cd ngx-template
$ npm install
```
## Запуск локального сервера и сборка
Локальный сервер (http://localhost:4200)
```sh
$ npm start
```
Сборка dev (environment.ts)
```sh
$ npm run build
```
Сборка dev CI (environment.devCI.ts)
```sh
$ npm run buildDevCI
```
Сборка stb (environment.stb.ts)
```sh
$ npm run buildStb
```
Сборка пред prod (environment.testProd.ts)
```sh
$ npm run buildTestProd
```
Сборка prod (environment.prod.ts)
```sh
$ npm run buildProd
```

## Auth Interceptor

в сервис core/services/auth-interceptor добавить страницу на которую будет редирект

## Дополнительные материалы

### Tutorials

* [Tour of Heroes](https://angular.io/tutorial)
* [Angular 5 (formerly Angular 2) - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/)

### Стайлгайд

* https://angular.io/guide/styleguide - оригинал
* http://www.front-nika.ru/ru/angular-2-luchshie-praktiki-style-guide/ - перевод

### Быстрая работа с angular-cli

* [angular-cli](https://cli.angular.io/)

* [быстрая генерация модулей, компонентов и др.](https://github.com/angular/angular-cli/wiki/generate)

* [дополнительные параметры для сборки](https://github.com/angular/angular-cli/wiki/build)

### flux и redux

* [Руководство по Flux в картинках](https://medium.com/russian/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-flux-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-d59c03562ea)

* [@ngrx/platform - Reactive libraries for Angular](https://github.com/ngrx/platform)

* [Redux DevTools - Расширение для Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
