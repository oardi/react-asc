import { sortHelper } from '../helpers';
import type { IDictionary } from '../interfaces';

export {};

declare global {
	interface Array<T> {
		groupBy(valueGetter: (a: T) => string): IDictionary<T[]>;
		orderBy<T, G>(valueGetter: (a: T) => G, ascending?: boolean): T[];
		filterBy<G>(key?: string): G[];
		distinct<T>(comparator?: (obj1: unknown, obj2: unknown) => boolean): T[];
	}
}

Array.prototype.groupBy = function <T>(valueGetter: (a: T) => string): IDictionary<T> {
	return this.reduce((curr, obj) => {
		const key: string = valueGetter(obj);
		(curr[key] = curr[key] || []).push(obj);
		return curr;
	}, {});
};

Array.prototype.orderBy = function <T, G>(valueGetter: (a: T) => G, ascending: boolean = true): T[] {
	this?.sort((a, b) => sortHelper(a, b, valueGetter, ascending));
	return this;
};

Array.prototype.filterBy = function <T>(key?: string): T[] {
	return this.filter(a => {
		let result: boolean = false;
		if (key && a[key]) {
			result = a[key] === key;
		} else {
			result = a === key;
		}
		return result;
	});
};

Array.prototype.distinct = function <T>(comparator?: (obj1: unknown, obj2: unknown) => boolean): T[] {
	const thisAsArray: T[] = this as T[];
	const result: T[] = comparator
		? thisAsArray.filter((value, index, array) => array.findIndex(o => comparator(o, value)) === index)
		: thisAsArray.filter((value, index, array) => array.indexOf(value) === index);
	return result;
};
