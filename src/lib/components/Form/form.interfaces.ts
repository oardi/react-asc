import { FormControl } from './form.models';

export interface IControls {
	[key: string]: FormControl;
}

export interface IFormValues {
	[key: string]: any;
}

export interface IFormTextAreaOptions {
	rows: number;
	resize: boolean;
}

export interface IFormInputError {
	validator: string;
	message: string;
}

export interface IFormInputOptions {
	id?: string;
	value: string;
	label: string;
}
