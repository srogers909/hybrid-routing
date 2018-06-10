export namespace App {
    class AppController implements ng.IController {
        static $inject: string[] = ['$state', '$timeout'];

        constructor($state: ng.ui.IStateService, $timeout: ng.ITimeoutService) {
            $timeout(() => {
                $state.go('app.home');
            }, 0, false);
        }
    }

    export class AppComponent implements ng.IComponentOptions {
        static NAME: string = 'appView';
        controller: any;
        templateUrl: any;

        constructor() {
            this.controller = AppController;
            this.templateUrl = require('./app.component.html');
        }
    }
}
