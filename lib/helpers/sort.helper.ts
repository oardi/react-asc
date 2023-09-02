enum SortOrder { NONE = 0, ASC = 1, DESC = -1 }

const compareString = (valA: string, valB: string, ascending: boolean | undefined): number => {
	return valA.localeCompare(valB) * (ascending ? SortOrder.ASC : SortOrder.DESC);
};

const getSortOrder = <T>(valA: T, valB: T): SortOrder => {
	return valA < valB ? SortOrder.DESC : valA === valB ? SortOrder.NONE : SortOrder.ASC;
};

const compareNonString = <T>(valA: T, valB: T, ascending: boolean | undefined): number => {
	return getSortOrder(valA, valB) * (ascending ? SortOrder.ASC : SortOrder.DESC);
};

const getValue = <T>(valA: T, valB: T, ascending: boolean | undefined): number => {
	let result: number = 0;
	if (typeof valA === 'string' && typeof valB === 'string') {
		result = compareString(valA, valB, ascending);
	} else {
		result = compareNonString(valA, valB, ascending);
	}
	return result;
};

export const sortHelper = <T, G>(a: T, b: T, valueGetter: (a: T) => G, ascending?: boolean): number => {
	const valA: G = valueGetter(a);
	const valB: G = valueGetter(b);
	return getValue(valA, valB, ascending);
};
