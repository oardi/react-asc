import React, { Component, createRef } from 'react';
import type { IDictionary } from '../../interfaces';
import styles from './Form.module.scss';
import { FormError } from './FormError';
import { FormGroup } from './FormGroup';
import { FormHint } from './FormHint';
import { FormInput } from './FormInput';
import { FormLabel } from './FormLabel';
import type { IControls, IFormInputError } from './form.interfaces';
import type { FormControl } from './form.models';
import { EmailValidator, IsEmptyValidator, IsEqualValidator, MaxValidator, MinValidator } from './validators';

export interface IFormProps {
	className?: string;
	controls: IControls;
	validateOnBlur?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSubmit?: (values: any) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (values: any) => void;
	submitOnEnter?: boolean;
}

export interface IFormState {
	controls: IControls | undefined;
	isValid: boolean;
	isSubmitted: boolean;
	isChanged: boolean;
	submitOnEnter?: boolean;
}

export class Form extends Component<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props);
		this.state = {
			controls: undefined,
			isValid: false,
			isChanged: false,
			isSubmitted: false,
			submitOnEnter: props.submitOnEnter !== undefined ? props.submitOnEnter : true,
		};
	}

	getCssClasses(): string {
		const cssClasses: string[] = [];
		cssClasses.push(styles.form);
		this.props.className && cssClasses.push(this.props.className);
		return cssClasses.filter(css => css).join(' ');
	}

	static getDerivedStateFromProps(nextProps: IFormProps, state: IFormState): { controls: IControls } | null {
		if (!state.controls && nextProps.controls) {
			return { controls: nextProps.controls };
		}
		return null;
	}

	myForm: React.RefObject<HTMLFormElement | null> = createRef<HTMLFormElement>();

	handleChange(): void {
		// get value by myForm instead of getControl?
		if (this.state.isChanged || this.state.isSubmitted) {
			const keys: string[] = Object.keys(this.state.controls as IControls);
			const values: IDictionary<string> = keys.reduce((obj, f) => {
				const control: FormControl = this.getControl(f);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const newValue: any =
					(control.type === 'date' || control.type === 'datetime-local') &&
					control.value &&
					isValidDate(control.value as unknown as Date)
						? new Date(control.value as unknown as Date).toISOString()
						: control.value;

				return {
					...obj,
					[f]: newValue,
				};
			}, {});

			if (this.state.isValid && this.state.isSubmitted) {
				this.props.onSubmit && this.props.onSubmit(values);
			}
			this.props.onChange && this.props.onChange(values);
			this.setState({ isChanged: false, isSubmitted: false });
		}
	}

	// extract to service?
	private validateField(fieldValue: unknown, fieldValidators: string[]): IFormInputError[] {
		const errors: IFormInputError[] = [];
		if (fieldValidators) {
			for (const validator of fieldValidators) {
				const validatorSplitted: string[] = validator.split(':');
				const validatorName: string = validatorSplitted[0];
				const validatorParam: string | null = validatorSplitted.length > 1 ? validatorSplitted[1] : null;

				switch (validatorName) {
					case 'required':
						if (IsEmptyValidator(fieldValue as string)) {
							errors.push({ validator: validatorName, message: 'This field is required' });
						}
						break;
					case 'email':
						if (EmailValidator(fieldValue as string)) {
							errors.push({ validator: validatorName, message: 'Email format is wrong' });
						}
						break;
					case 'min':
						if (!MinValidator(fieldValue as string, parseInt(validatorParam as string))) {
							errors.push({ validator: validatorName, message: `Minimum number of ${validatorParam} characters not met` });
						}
						break;
					case 'max':
						if (!MaxValidator(fieldValue as string, parseInt(validatorParam as string))) {
							errors.push({ validator: validatorName, message: `Maximum number of ${validatorParam} characters exceeded` });
						}
						break;
					case 'match':
						if (validatorParam) {
							const matchControl: FormControl = this.getControl(validatorParam);
							if (matchControl) {
								if (!IsEqualValidator(fieldValue, matchControl.value)) {
									errors.push({ validator: validatorName, message: 'Values do not match' });
								}
							} else {
								// eslint-disable-next-line no-console
								console.error(`Form: Field ${validatorParam} not found`);
							}
						}
						break;
					default:
						break;
				}
			}
		}
		return errors;
	}

	private handleInputChange(name: string, value: string | number | readonly string[] | undefined): void {
		const field: FormControl = this.getControl(name);
		field.value = value;

		// redundant mit handleOnBlur
		field.isDirty = true;
		field.errors = this.validateField(field.value, field.validators);
		field.isValid = field.errors.length === 0;

		const newControls: IDictionary<FormControl> = { ...this.state.controls };
		newControls[name] = field;
		this.setState({ controls: newControls, isChanged: true }, () => this.handleChange());
	}

	private handleOnBlur(e: React.FocusEvent<HTMLInputElement>): void {
		if (this.props.validateOnBlur) {
			const { name } = e.target as HTMLInputElement;
			const field: FormControl = this.getControl(name);
			field.isDirty = true;
			field.errors = this.validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;

			const controls: IControls | undefined = this.state.controls;
			if (controls) {
				controls[name] = field;
				this.setState({ controls: controls, isChanged: true }, () => this.handleChange());
			}
		}
	}

	private isRequired(fieldName: string): boolean {
		let result: boolean = false;
		result = this.getControl(fieldName).validators.indexOf('required') >= 0;
		return result;
	}

	private isInvalid(fieldName: string): boolean {
		let result: boolean = false;
		const field: FormControl = this.getControl(fieldName);
		result = field.isDirty && !field.isValid;
		return result;
	}

	getControl(name: string): FormControl {
		return (this.state.controls as IControls)[name];
	}

	private renderLabel(fieldKey: string, label: string, labelClassName: string = 'form-label'): React.JSX.Element {
		const cssClasses: (string | undefined)[] = [labelClassName, this.isRequired(fieldKey) ? 'required' : undefined];
		return (
			<FormLabel htmlFor={fieldKey} className={cssClasses.join(' ')}>
				{label}
			</FormLabel>
		);
	}

	handleFormSubmit(): void {
		for (const fieldKey of Object.keys(this.state.controls as IControls)) {
			const field: FormControl = this.getControl(fieldKey);
			// redundant mit handleBlur
			field.isDirty = true;
			field.errors = this.validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;
		}

		this.setState(
			{
				controls: { ...this.state.controls },
				isSubmitted: true,
				isValid: Object.keys(this.state.controls as IControls)
					.map(f => this.getControl(f).isValid)
					.every(valid => valid === true),
			},
			() => this.handleChange()
		);
	}

	// trigger via ref
	handleFormReset(): void {
		for (const fieldKey of Object.keys(this.state.controls as IControls)) {
			const field: FormControl = this.getControl(fieldKey);
			field.value = '';
			field.isDirty = false;
			field.errors = [];
			field.isValid = field.errors.length === 0;
		}

		this.setState({
			controls: { ...this.state.controls },
			isSubmitted: false,
			isChanged: false,
			isValid: false,
		});
	}

	handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement | undefined>): void {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.state.submitOnEnter && this.handleFormSubmit();
		}
	}

	destroy(): void {
		this.setState({ controls: {}, isValid: false, isChanged: false, isSubmitted: false });
	}

	getFormGroupCssClass(fieldKey: string): string | undefined {
		return this.getControl(fieldKey).config.formGroupClassName;
	}

	render(): React.JSX.Element {
		return (
			<form className={this.getCssClasses()} ref={this.myForm}>
				{this.state &&
					this.state.controls &&
					Object.keys(this.state.controls).map(fieldKey => {
						return (
							<FormGroup key={fieldKey} className={this.getFormGroupCssClass(fieldKey)}>
								{this.getControl(fieldKey).config.labelPosition !== 'behind' &&
									this.getControl(fieldKey).type !== 'checkbox' &&
									this.renderLabel(
										fieldKey,
										this.getControl(fieldKey).config.label,
										this.getControl(fieldKey).config.labelClassName
									)}

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
									selectOptions={this.getControl(fieldKey).config.selectOptions}
									autoCompleteOptions={this.getControl(fieldKey).config.autoCompleteOptions}
									type={this.getControl(fieldKey).type}
									value={this.getControl(fieldKey).value}
									disabled={this.getControl(fieldKey).config.disabled}
									readonly={this.getControl(fieldKey).config.readonly}
									onChange={({ name, value }): void => this.handleInputChange(name as string, value)}
									onBlur={(e): void => this.handleOnBlur(e)}
									onKeyDown={(e): void => this.handleOnKeyDown(e)}
								/>

								{this.getControl(fieldKey).config.labelPosition === 'behind' &&
									this.getControl(fieldKey).type !== 'checkbox' &&
									this.renderLabel(
										fieldKey,
										this.getControl(fieldKey).config.label,
										this.getControl(fieldKey).config.labelClassName
									)}

								{this.getControl(fieldKey).config.hint && (
									<FormHint>{this.getControl(fieldKey).config.hint as string}</FormHint>
								)}

								{this.getControl(fieldKey).errors && <FormError errors={this.getControl(fieldKey).errors} />}
							</FormGroup>
						);
					})}
			</form>
		);
	}
}

function isValidDate(dateObject: Date): boolean {
	return new Date(dateObject).toString() !== 'Invalid Date';
}
