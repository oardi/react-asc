export interface ILoggerService {
    log(...args: Array<any>): any;
    info(...args: Array<any>): any;
    warn(...args: Array<any>): any;
    debug(...args: Array<any>): any;
    error(...args: Array<any>): any;
}
export declare enum LogType {
    log = "log",
    info = "info",
    warn = "warn",
    debug = "debug",
    error = "error"
}
declare class LoggerService implements ILoggerService {
    logType: typeof LogType;
    log(...args: Array<any>): void;
    info(...args: Array<any>): void;
    warn(...args: Array<any>): void;
    debug(...args: Array<any>): void;
    error(...args: Array<any>): void;
    _doLog(logType: any, args: any): void;
}
export declare const loggerService: LoggerService;
export {};
