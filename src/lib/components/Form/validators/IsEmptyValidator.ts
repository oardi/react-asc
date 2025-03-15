export const IsEmptyValidator = (value: string): boolean => value?.toString().trim() === '' || value === null || value === undefined;
