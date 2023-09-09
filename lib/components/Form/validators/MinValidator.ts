export const MinValidator = (val: string | undefined, minLength: number): boolean => (val && val.length >= minLength) || false;
