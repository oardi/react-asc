import type { Nullable } from '../types';
import { loggerService } from './logger.service';

const CLASSNAME: string = 'LocalService';

class LocalService {
	set<T>(key: string, value: T): void {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			loggerService.error(CLASSNAME, 'set', err);
		}
	}

	get<T>(key: string): Nullable<T> {
		let result: Nullable<T> = null;
		try {
			result = JSON.parse(localStorage.getItem(key) as string);
		} catch (err) {
			loggerService.error(CLASSNAME, 'get', err);
		}
		return result;
	}

	remove(key: string): void {
		localStorage.removeItem(key);
	}

	removeAll(): void {
		localStorage.clear();
	}

	getKeysBy(key: string): string[] {
		return Object.keys(localStorage).filter(k => k.startsWith(key));
	}
}

export const localService: LocalService = new LocalService();
