import React, { Component, createRef } from 'react';
import { FormLabel } from './FormLabel';
import { FormGroup } from './FormGroup';
import { FormInput } from './FormInput';
import { FormHint } from './FormHint';
import { FormError } from './FormError';
import { IControls, IFormInputError, IFormValues } from './form.interfaces';
import { IsEmptyValidator, EmailValidator } from './validators';
import { FormControl } from './form.models';

export interface IFormProps {
	controls: IControls;
	validateOnBlur?: boolean;
	onSubmit?: (values: IFormValues) => void;
	onChange?: (values: IFormValues) => void;
}

export interface IFormState {
	controls: IControls;
	isValid: boolean;
	isSubmitted: boolean;
	isChanged: boolean;
}

const CLASSNAME = 'Form';
export class Form extends Component<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props);
		this.state = { controls: undefined, isValid: false, isChanged: false, isSubmitted: false };
	}

	static getDerivedStateFromProps(nextProps: IFormProps, state: IFormState) {
		if (!state.controls && nextProps.controls) {
			console.warn('CALL IT');
			console.warn(state.controls);
			console.warn(nextProps.controls);
			return ({ controls: nextProps.controls });
		}
		return null;
	}

	myForm = createRef<HTMLFormElement>();

	handleChange() {
		// get value by myForm?
		if (this.state.isChanged || this.state.isSubmitted) {
			const keys = Object.keys(this.state.controls);
			const values = keys.reduce((obj, f) => ({
				...obj,
				[f]: this.getControl(f).value
			}), {});

			if (this.state.isValid && this.state.isSubmitted) {
				this.props.onSubmit && this.props.onSubmit(values);
			}
			this.props.onChange && this.props.onChange(values);
			this.setState({ isChanged: false, isSubmitted: false });
		}
	}

	private validateField(fieldValue, fieldValidators: Array<string>): Array<IFormInputError> {
		const errors: Array<IFormInputError> = [];
		for (const validator of fieldValidators) {
			switch (validator) {
				case 'required':
					if (IsEmptyValidator(fieldValue)) {
						errors.push({ validator, message: 'This field is required' });
					}
					break;

				case 'email':
					if (EmailValidator(fieldValue)) {
						errors.push({ validator, message: 'Email format is wrong' });
					}
					break;
				default:
					break;
			}
		}
		return errors;
	}

	private handleInputChange(e: Event) {
		let { name, value, checked, type, files } = (e.target as HTMLInputElement);

		// TODO! - read value from formElements
		const formControl = this.myForm.current[name];

		if (type === 'checkbox' && (formControl as RadioNodeList).length > 0) {
			console.warn('checkbox group - TODO');
			const formControls = formControl as RadioNodeList;
			const formControlsAsArray = Array.from(formControls);
			const values = formControlsAsArray.map((control) => (control as HTMLInputElement).checked ? (control as HTMLInputElement).value : '').filter(v => v);
			(value as any) = values;
		}

		const field = this.getControl(name);
		// redundant mit handleOnBlur
		field.value = type === 'checkbox' ? checked : value; // && (value === 'on' || value === 'off')
		field.isDirty = true;
		field.errors = this.validateField(field.value, field.validators);
		field.isValid = field.errors.length === 0;

		const newControls = { ...this.state.controls };
		newControls[name] = field;
		this.setState({ controls: newControls, isChanged: true }, () => this.handleChange());
	}

	private handleOnBlur(e: Event) {
		if (this.props.validateOnBlur) {
			const { name } = (e.target as HTMLInputElement);
			const field = this.getControl(name);
			field.isDirty = true;
			field.errors = this.validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;

			const controls = this.state.controls;
			controls[name] = field;
			this.setState({ controls: controls, isChanged: true }, () => this.handleChange());
		}
	};

	private isRequired(fieldName: string) {
		let result = false;
		result = this.getControl(fieldName).validators.indexOf('required') >= 0;
		return result;
	}

	private isInvalid(fieldName: string): boolean {
		let result = false;
		const field = this.getControl(fieldName);
		result = field.isDirty && !field.isValid;

		return result;
	}

	getControl(name: string): FormControl {
		return this.state.controls[name];
	}

	private renderLabel(fieldKey: string, label: string, labelClassName: string = '') {
		const cssClasses = [labelClassName, this.isRequired(fieldKey) ? 'required' : undefined];
		return <FormLabel htmlFor={fieldKey} className={cssClasses.join(' ')}>{label}</FormLabel>;
	};

	// trigger via ref
	handleFormSubmit() {
		for (const fieldKey of Object.keys(this.state.controls)) {
			const field = this.getControl(fieldKey);

			// redundant mit handleBlur
			field.isDirty = true;
			field.errors = this.validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;
		}

		this.setState({
			controls: { ...this.state.controls },
			isSubmitted: true,
			isValid: Object.keys(this.state.controls).map(f => this.getControl(f).isValid).every(valid => valid === true)
		}, () => this.handleChange());
	}

	// trigger via ref
	handleFormReset() {
		for (const fieldKey of Object.keys(this.state.controls)) {
			const field = this.getControl(fieldKey);
			field.value = '';
			field.isDirty = false;
			field.errors = [];
			field.isValid = field.errors.length === 0;
		}

		this.setState({
			controls: { ...this.state.controls },
			isSubmitted: false,
			isChanged: false,
			isValid: false
		});
	}

	render() {
		return (
			<form ref={this.myForm}>

				{this.state && this.state.controls && Object.keys(this.state.controls).map((fieldKey) => {
					return (
						<FormGroup key={fieldKey} className={this.getControl(fieldKey).config.formGroupClassName}>

							{
								this.getControl(fieldKey).config.labelPosition !== 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
								this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName)
							}

							{/* TODO - pass configObject instead of every single Config */}
							<FormInput
								autoFocus={this.getControl(fieldKey).config.autoFocus}
								className={this.getControl(fieldKey).config.formControlClassName}
								isValid={!this.isInvalid(fieldKey)}
								label={this.getControl(fieldKey).config.label}
								name={fieldKey}
								options={this.getControl(fieldKey).config.options}
								placeholder={this.getControl(fieldKey).config.placeholder}
								textareaOptions={this.getControl(fieldKey).config.textareaOptions}
								type={this.getControl(fieldKey).type}
								value={this.getControl(fieldKey).value}
								disabled={this.getControl(fieldKey).config.disabled}
								readonly={this.getControl(fieldKey).config.readonly}
								onChange={(e) => this.handleInputChange(e)}
								onBlur={(e) => this.handleOnBlur(e)}
							/>

							{
								this.getControl(fieldKey).config.labelPosition === 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
								this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName)
							}

							{this.getControl(fieldKey).config.hint &&
								<FormHint hint={this.getControl(fieldKey).config.hint} />
							}

							{this.getControl(fieldKey).errors &&
								<FormError errors={this.getControl(fieldKey).errors} />
							}
						</FormGroup>
					);
				})}

			</form>
		)
	}
}
