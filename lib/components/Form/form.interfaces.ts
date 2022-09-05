import type { FormControl } from './form.models';

export interface IControls {
	[key: string]: FormControl;
}

export interface IFormTextAreaOptions {
	rows: number;
	resize: boolean;
}

export interface IFormSelectOptions {
	multiple?: boolean;
}

export interface IFormAutoCompleteOptions {
	openOnFocus?: boolean;
}

export interface IFormInputError {
	validator: string;
	message: string;
}

export interface IFormInputOptions {
	id?: string;
	value: string;
	label?: string;
}

export interface IFormControlConfig {
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

	options?: IFormInputOptions[];
	// fileOptions

	textareaOptions?: IFormTextAreaOptions;
	selectOptions?: IFormSelectOptions;
	autoCompleteOptions?: IFormAutoCompleteOptions;
}
