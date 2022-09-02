import type { IFormControlConfig, IFormInputError } from './form.interfaces';
import type { IFormControlType } from './form.types';

export class FormControl {
	constructor(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public value: any,
		public validators: string[] = [],
		public type: IFormControlType,
		public config: IFormControlConfig) {
	}

	errors: IFormInputError[] = [];
	isValid: boolean = false;
	isDirty: boolean = false;
}
