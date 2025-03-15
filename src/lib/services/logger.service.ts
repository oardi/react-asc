export interface ILoggerService {
	log(...args: unknown[]): void;
	info(...args: unknown[]): void;
	warn(...args: unknown[]): void;
	debug(...args: unknown[]): void;
	error(...args: unknown[]): void;
}

export enum LogType { log = 'log', info = 'info', warn = 'warn', debug = 'debug', error = 'error' }

class LoggerService implements ILoggerService {
	logType: typeof LogType = LogType;

	log(...args: unknown[]): void {
		this._doLog(this.logType.log, args);
	}

	info(...args: unknown[]): void {
		this._doLog(this.logType.info, args);
	}

	warn(...args: unknown[]): void {
		this._doLog(this.logType.warn, args);
	}

	debug(...args: unknown[]): void {
		this._doLog(this.logType.debug, args);
	}

	error(...args: unknown[]): void {
		this._doLog(this.logType.error, args);
	}

	_doLog(logType: LogType, ...args: unknown[]): void {
		(console as Console)[logType].apply(console, args);
	}
}

export const loggerService: LoggerService = new LoggerService();
