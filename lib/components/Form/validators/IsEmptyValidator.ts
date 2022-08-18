export const IsEmptyValidator = (value: unknown): boolean => (value as string).trim() === '' || value === null || value === undefined;
