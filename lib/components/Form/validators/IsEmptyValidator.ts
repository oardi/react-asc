export const IsEmptyValidator = (value: string): boolean =>
	value?.trim() === ''
	|| value === null
	|| value === undefined;
