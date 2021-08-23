import React, { Fragment } from 'react';
import { AutoComplete } from '../AutoComplete';
import { Checkbox } from '../Checkbox';
import { FileInput } from '../FileInput';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { IFormInputOptions, IFormTextAreaOptions, IFormSelectOptions, IFormAutoCompleteOptions } from './form.interfaces';
import { IFormControlType } from './form.types';

export interface IFormInputProps {
	value: any;
	name: string;
	type: IFormControlType;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	readonly?: boolean;
	isValid?: boolean;
	autoFocus?: boolean;
	options?: Array<IFormInputOptions>;
	textareaOptions?: IFormTextAreaOptions;
	selectOptions?: IFormSelectOptions;
	autoCompleteOptions?: IFormAutoCompleteOptions;
	label?: string; // checkbox, radio - move?
	onChange?: (name: string, value: any, type: string) => void;
	onBlur?: (event: any) => void;
	onKeyDown?: (event: any) => void;
}

export const FormInput = (props: IFormInputProps) => {

	const {
		value,
		name,
		type,
		placeholder,
		className = 'form-control',
		isValid = true,
		options = [],
		textareaOptions,
		selectOptions,
		autoCompleteOptions,
		autoFocus,
		label,
		disabled = false,
		readonly = false,
		onChange,
		onBlur,
		onKeyDown
	} = props;

	return (
		<Fragment>
			{/*
				'autocomplete' |
				'toggle' */}

			{
				(
					type === 'text' ||
					type === 'date' ||
					type === 'datetime-local' ||
					type === 'email' ||
					type === 'number' ||
					type === 'password' ||
					type === 'color' ||
					type === 'time'
				)
				&&
				<input
					id={name}
					name={name}
					type={type}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					onChange={e => onChange && onChange(name, e.target.value, type)}
					onBlur={onBlur}
					placeholder={placeholder}
					readOnly={readonly}
					disabled={disabled}
					onKeyDown={onKeyDown}
				/>
			}

			{type === 'file' &&
				<FileInput
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					readOnly={readonly}
					disabled={disabled}
					onChange={e => onChange && onChange(name, e.target.value, type)}
				/>
			}

			{
				type === 'textarea' &&
				<Textarea
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					onChange={e => onChange && onChange(name, e.target.value, type)}
					placeholder={placeholder}
					rows={textareaOptions?.rows}
					style={textareaOptions?.resize !== false ? undefined : { resize: 'none' }}
				/>
			}

			{
				type === 'select' &&
				<Select
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					multiple={selectOptions?.multiple}
					onChange={e => onChange && onChange(name, e, type)}
					onKeyDown={onKeyDown}
					options={options}
				/>
			}

			{
				type === 'autocomplete' &&
				<AutoComplete
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					openOnFocus={autoCompleteOptions?.openOnFocus}
					onChange={e => onChange && onChange(name, e, type)}
					onKeyDown={onKeyDown}
					options={options}
				/>
			}

			{
				type === 'checkbox' &&
				<Checkbox
					id={name}
					name={name}
					label={label}
					className={(!isValid ? ' is-invalid' : '')}
					onChange={e => onChange && onChange(name, e.target.checked, type)}
					checked={value}
					onKeyDown={onKeyDown}
				/>
			}

			{/* {
				type === 'checkboxgroup' &&
				options && options.map(option =>
					<Checkbox
						key={option.id}
						label={option.label}
						id={option.id}
						name={name}
						value={option.value}
						checked={value && value.some((v: string) => v === option.value)}
						onChange={e => onChange && onChange(name, e.target.checked, type)}
						onKeyDown={onKeyDown}
					/>
				)
			} */}

			{
				type === 'radio' &&
				<Fragment>
					{options.map((option) =>
						<div className="form-check" key={option.id}>
							<input
								id={option.id ? option.id : option.value}
								name={name}
								type="radio"
								className="form-check-input"
								onChange={e => onChange && onChange(name, e.target.value, type)}
								value={option.value}
								checked={value === option.value}
								onKeyDown={onKeyDown}
							/>
							<label className="form-check-label" htmlFor={option.id}>
								{option.label}
							</label>
						</div>
					)}
				</Fragment>
			}

		</Fragment>
	);
};
