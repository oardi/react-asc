export const IsEmptyValidator = (value: unknown) => (value as string).trim() === '' || value === null || value === undefined;
