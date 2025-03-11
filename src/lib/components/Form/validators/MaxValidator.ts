export const MaxValidator = (val: string | undefined, valueB: number): boolean => (val && val.toString().length <= valueB) || false;
