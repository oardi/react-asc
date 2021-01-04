import React, { useEffect, useState } from 'react';
import { IsEmptyValidator } from './validators/IsEmptyValidator';
import { EmailValidator } from './validators/EmailValidtor';
import { FormLabel } from './FormLabel';
import { FormGroup } from './FormGroup';
import { FormInput } from './FormInput';
import { FormHint } from './FormHint';
import { FormError } from './FormError';
import { IControls, IFormInputError, IFormValues } from './form.interfaces';

export interface IFormOldProps {
	controls: IControls;
	validateOnBlur: boolean;
	onSubmit?: (values: IFormValues) => void;
	onChange?: (values: IFormValues) => void;
}

export interface IFormOldState {
	controls: IControls;
	isValid: boolean;
	isSubmitted: boolean;
	isChanged: boolean;
}

export const FormOld = ({ controls, validateOnBlur, onSubmit, onChange }: IFormOldProps) => {

	const [form, setForm] = useState<IFormOldState>({
		controls: controls,
		isValid: false,
		isSubmitted: false,
		isChanged: false
	});

	useEffect(() => {
		if (form.isSubmitted || form.isChanged) {
			const keys = Object.keys(form.controls);
			const values = keys.reduce((obj, f) => ({
				...obj,
				[f]: form.controls[f].value
			}), {});


			if (form.isValid) {
				onSubmit && onSubmit(values);
			}

			onChange && onChange(values);
			setForm({ ...form, isSubmitted: false, isChanged: false });
		}

	}, [form]);

	const validateField = (fieldValue, fieldValidators) => {
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
	};

	const handleInputChange = (e) => {
		const { name, value, checked, type, files } = e.target;
		const field = form.controls[name];
		field.value = type === 'checkbox' ? checked : value;
		field.isDirty = true;
		field.errors = validateField(field.value, field.validators);
		field.isValid = field.errors.length === 0;

		form.controls[name] = field;
		setForm({ ...form, isChanged: true });
	};

	const handleOnBlur = e => {
		if (validateOnBlur) {
			const { name } = e.target; // value, checked, type
			const field = form.controls[name];
			field.isDirty = true;
			field.errors = validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;
			form.controls[name] = field;
			setForm({ ...form, isChanged: true });
		}
	};

	const isRequired = (fieldName: string) => {
		let result = false;
		result = form.controls[fieldName].validators.indexOf('required') >= 0;
		return result;
	};

	const isInvalid = (fieldName: string): boolean => {
		let result = false;
		const field = form.controls[fieldName];
		result = field.isDirty && !field.isValid;
		return result;
	};

	const renderLabel = (fieldKey, label, labelClassName = '') => {
		const cssClasses = [labelClassName, isRequired(fieldKey) ? 'required' : undefined];
		return (
			<FormLabel htmlFor={fieldKey} className={cssClasses.join(' ')}>
				{label}
			</FormLabel>
		);
	};

	return (

		<form>

			{form && form.controls && Object.keys(form.controls).map((fieldKey) => {
				return (
					<FormGroup key={fieldKey} className={form.controls[fieldKey].config.formGroupClassName}>

						{
							form.controls[fieldKey].config.labelPosition !== 'behind' && form.controls[fieldKey].type !== 'checkbox' &&
							renderLabel(fieldKey, form.controls[fieldKey].config.label, form.controls[fieldKey].config.labelClassName)
						}

						{/* TODO - pass configObject instead of every single Config */}
						<FormInput
							name={fieldKey}
							type={form.controls[fieldKey].type}
							className={form.controls[fieldKey].config.formControlClassName}
							onChange={handleInputChange}
							value={form.controls[fieldKey].value}
							isValid={!isInvalid(fieldKey)}
							options={form.controls[fieldKey].config.options}
							textareaOptions={form.controls[fieldKey].config.textareaOptions}
							autoFocus={form.controls[fieldKey].config.autoFocus}
							onBlur={handleOnBlur}
							placeholder={form.controls[fieldKey].config.placeholder}
							label={form.controls[fieldKey].config.label}
						/>

						{
							form.controls[fieldKey].config.labelPosition === 'behind' && form.controls[fieldKey].type !== 'checkbox' &&
							renderLabel(fieldKey, form.controls[fieldKey].config.label, form.controls[fieldKey].config.labelClassName)
						}

						{form.controls[fieldKey].config.hint &&
							<FormHint hint={form.controls[fieldKey].config.hint} />
						}

						{form.controls[fieldKey].errors &&
							<FormError errors={form.controls[fieldKey].errors} />
						}
					</FormGroup>
				);
			})}

		</form>
	);
};
