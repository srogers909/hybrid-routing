// app.ts
import { module, bootstrap } from 'angular';
import { Services } from './services/logger.services';
import { App } from './app.component';
import { Home } from './home/home.component';

import './app.less';

export let app = module('app', [ 'ui.router' ])
    .config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            $stateProvider
                .state({
                    name: 'app',
                    url: '/app',
                    component: App.AppComponent.NAME
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
    .component(App.AppComponent.NAME, new App.AppComponent())
    .component(Home.HomeComponent.NAME, new Home.HomeComponent());

(() => {  bootstrap(document, ['app']); })();