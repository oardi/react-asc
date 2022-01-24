export interface ILoggerService {
	log(...args: Array<unknown>): void;
	info(...args: Array<unknown>): void;
	warn(...args: Array<unknown>): void;
	debug(...args: Array<unknown>): void;
	error(...args: Array<unknown>): void;
}

export enum LogType { log = 'log', info = 'info', warn = 'warn', debug = 'debug', error = 'error' }

class LoggerService implements ILoggerService {
	logType = LogType;

	log(...args: Array<unknown>) {
		this._doLog(this.logType.log, args);
	}

	info(...args: Array<unknown>) {
		this._doLog(this.logType.info, args);
	}

	warn(...args: Array<unknown>) {
		this._doLog(this.logType.warn, args);
	}

	debug(...args: Array<unknown>) {
		this._doLog(this.logType.debug, args);

	}

	error(...args: Array<unknown>) {
		this._doLog(this.logType.error, args);
	}

	_doLog(logType: LogType, args: unknown) {
		switch (logType) {
			case this.logType.log:
				console.log(args);
				break;
			case this.logType.info:
				console.info(args);
				break;
			case this.logType.warn:
				console.warn(args);
				break;
			case this.logType.debug:
				console.debug(args);
				break;
			case this.logType.error:
				console.error(args);
				break;
		}
	}
}

export const loggerService = new LoggerService();
