export interface ILoggerService {
    log(...args: Array<any>): void;
    info(...args: Array<any>): void;
    warn(...args: Array<any>): void;
    debug(...args: Array<any>): void;
    error(...args: Array<any>): void;
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
    _doLog(logType: LogType, args: any): void;
}
export declare const loggerService: LoggerService;
export {};
