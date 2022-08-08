export interface ILoggerService {
	log(...args: Array<unknown>): void;
	info(...args: Array<unknown>): void;
	warn(...args: Array<unknown>): void;
	debug(...args: Array<unknown>): void;
	error(...args: Array<unknown>): void;
}

export enum LogType { log = 'log', info = 'info', warn = 'warn', debug = 'debug', error = 'error' }

class LoggerService implements ILoggerService {

	log(...args: Array<unknown>) {
		this._doLog(LogType.log, args);
	}

	info(...args: Array<unknown>) {
		this._doLog(LogType.info, args);
	}

	warn(...args: Array<unknown>) {
		this._doLog(LogType.warn, args);
	}

	debug(...args: Array<unknown>) {
		this._doLog(LogType.debug, args);

	}

	error(...args: Array<unknown>) {
		this._doLog(LogType.error, args);
	}

	_doLog(logType: LogType, args: unknown) {
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
		}
	}
}

export const loggerService: LoggerService = new LoggerService();
