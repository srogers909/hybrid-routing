// app.ts
import { module } from 'angular';
import { Services } from './services/logger.services';
import { Todo } from './todo/todo.controller';
import { App } from './app.component';
import { Home } from './home/home.component';

import './app.less';

export let angularJSModule = module('app', [ 'ui.router', 'ui.router.upgrade' ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        (
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider) => {

            $locationProvider.hashPrefix('');

            $stateProvider
                .state({
                    name: 'app',
                    url: '/app',
                    component: App.AppComponent.NAME
                })
                .state({
                    name: 'app.todo',
                    url: '/todo',
                    templateUrl: require('./todo/todo.controller.html'),
                    controller: Todo.TodoController.NAME
                })
                .state({
                    name: 'app.home',
                    url: '/home',
                    component: Home.HomeComponent.NAME
                });

            $urlRouterProvider.otherwise('/app');
        }]
    )
    .service(Services.LoggerService.NAME, Services.LoggerService)
    .controller(Todo.TodoController.NAME, Todo.TodoController)
    .component(App.AppComponent.NAME, new App.AppComponent())
    .component(Home.HomeComponent.NAME, new Home.HomeComponent());

const traceRunBlock = ['$trace', $trace => { $trace.enable(1); }];
angularJSModule.run(traceRunBlock);