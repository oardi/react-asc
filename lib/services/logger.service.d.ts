export declare class LoggerService {
    constructor();
    logType: {
        log: string;
        info: string;
        warn: string;
        debug: string;
        error: string;
    };
    log(...args: Array<any>): void;
    info(...args: Array<any>): void;
    warn(...args: Array<any>): void;
    debug(...args: Array<any>): void;
    error(...args: Array<any>): void;
    _doLog(logType: any, args: any): void;
}
