import { IFormControlConfig, IFormInputError } from './form.interfaces';
import { IFormControlType, IFormValidatorType } from './form.types';

export class FormControl {
	constructor(
		public value: any,
		public validators: Array<IFormValidatorType> = [],
		public type: IFormControlType,
		public config: IFormControlConfig) {
	}

	errors: Array<IFormInputError> = [];
	isValid: boolean = false;
	isDirty: boolean = false;
}
