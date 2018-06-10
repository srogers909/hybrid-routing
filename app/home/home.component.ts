import { Services } from '../services/logger.services';
import ILoggerService = Services.ILoggerService;

export namespace Home {
    class HomeController implements ng.IController {
        static $inject: string[] = ['LoggerService'];
        log: ILoggerService;

        constructor(public LoggerService: ILoggerService) {
            this.log = LoggerService;
        }

        public $onInit(): void {
            this.log.Log('Hey, I\'m an instance of the Logger Service. Neat.');
        }

        public $onDestroy(): void {
            this.log.Log('Well, this is the end for me. oddly, another version of me will return someday.');
        }
    }

    export class HomeComponent implements ng.IComponentOptions {
        static NAME: string = 'homeView';
        controller: any;
        templateUrl: any;

        constructor() {
            this.controller = HomeController;
            this.templateUrl = require('./home.html');
        }
    }
}
