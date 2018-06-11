import {Services} from '../services/logger.services';
import ILoggerService = Services.ILoggerService;

export namespace Todo {
    export class TodoController implements ng.IController {
        static NAME: string = 'TodoController';
        static $inject: string[] = ['LoggerService'];

        log: ILoggerService;

        constructor(LoggerService: ILoggerService) {
            this.log = LoggerService;
        }

        public $onInit(): void {
            this.log.Log('I am an instance of a TS NG1 Controller without a component parent.');
        }

        public $onDestroy(): void {
            this.log.Log('TS NG1 Controller signing off.');
        }
    }
}