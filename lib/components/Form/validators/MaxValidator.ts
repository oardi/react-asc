export const MaxValidator = (val: string | undefined, valueB: number): boolean => (val && val.length <= valueB) || false;
