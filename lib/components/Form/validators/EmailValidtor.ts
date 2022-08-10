import { IsEmptyValidator } from './IsEmptyValidator';

export const EmailValidator = (value: string) => {
	const isInvalidEmailFormat: boolean = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;
	const isInvalid: boolean = !IsEmptyValidator(value) && isInvalidEmailFormat;
	return isInvalid;
};
