export interface ILoggerService {
	log(...args: unknown[]): void;
	info(...args: unknown[]): void;
	warn(...args: unknown[]): void;
	debug(...args: unknown[]): void;
	error(...args: unknown[]): void;
}

export enum LogType { log = 'log', info = 'info', warn = 'warn', debug = 'debug', error = 'error' }

class LoggerService implements ILoggerService {

	log(...args: unknown[]): void {
		this._doLog(LogType.log, args);
	}

	info(...args: unknown[]): void {
		this._doLog(LogType.info, args);
	}

	warn(...args: unknown[]): void {
		this._doLog(LogType.warn, args);
	}

	debug(...args: unknown[]): void {
		this._doLog(LogType.debug, args);

	}

	error(...args: unknown[]): void {
		this._doLog(LogType.error, args);
	}

	_doLog(logType: LogType, args: unknown): void {
		switch (logType) {
			case LogType.log:
				console.log(args);
				break;
			case LogType.info:
				console.info(args);
				break;
			case LogType.warn:
				console.warn(args);
				break;
			case LogType.debug:
				console.debug(args);
				break;
			case LogType.error:
				console.error(args);
				break;
			default:
				console.log(args);
				break;
		}
	}
}

export const loggerService: LoggerService = new LoggerService();
