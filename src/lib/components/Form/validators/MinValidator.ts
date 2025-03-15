export const MinValidator = (val: string | undefined, minLength: number): boolean => (val && val.toString().length >= minLength) || false;
