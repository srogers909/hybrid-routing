export namespace Services {
    export interface ILoggerService {
        Log(message: string): void;
        LogError(message: string): void;
        LogWarning(message: string): void;
    }

    export class LoggerService implements ILoggerService {
        static NAME: string = 'LoggerService';
        static $inject: string[] = ['$log'];
        log: ng.ILogService;

        constructor($log: ng.ILogService) {
            this.log = $log;
        }

        public Log(message: string): void {
            this.log.info(message);
        }

        public LogError(message: string): void {
            this.log.error(message);
        }

        public LogWarning(message: string): void {
            this.log.warn(message);
        }
    }
}
