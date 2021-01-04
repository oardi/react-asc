import { IFormInputError, IFormInputOptions, IFormTextAreaOptions } from './form.interfaces';
import { IControlType, IFormValidator } from './form.types';

export class FormControlConfig {
	label: string;
	placeholder?: string;
	formControlClassName?: string;
	formGroupClassName?: string;
	labelClassName?: string;
	labelPosition?: string;
	autoFocus?: boolean;
	hint?: string;
	disabled?: boolean;
	readonly?: boolean;

	options?: Array<IFormInputOptions>;
	// fileOptions
	// fileOptions { accept, size }

	textareaOptions?: IFormTextAreaOptions;
}

export class FormControl {
	constructor(
		public value: any,
		public validators: Array<IFormValidator> = [],
		public type: IControlType,
		public config: FormControlConfig) {
	}

	errors: Array<IFormInputError> = [];
	isValid: boolean = false;
	isDirty: boolean = false;
}
