import { IFormControlConfig, IFormInputError } from './form.interfaces';
import { IFormControlType } from './form.types';

export class FormControl {
	constructor(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public value: any,
		public validators: Array<string> = [],
		public type: IFormControlType,
		public config: IFormControlConfig) {
	}

	errors: Array<IFormInputError> = [];
	isValid: boolean = false;
	isDirty: boolean = false;
}
