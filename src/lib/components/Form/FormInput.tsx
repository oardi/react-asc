import React, { Fragment } from 'react';
import { Checkbox } from '../Checkbox';
import { FileInput } from '../FileInput';
import { Textarea } from '../Textarea';
import { IFormInputOptions, IFormTextAreaOptions, IFormSelectOptions } from './form.interfaces';
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
	label?: string; // checkbox, radio - move?
	onChange?: (event: any) => void;
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
		isValid,
		options = [],
		textareaOptions,
		selectOptions,
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
				'multiselect' |
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
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					readOnly={readonly}
					disabled={disabled}
					onKeyDown={onKeyDown}
				/>
			}

			{ type === 'file' &&
				<FileInput
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					readOnly={readonly}
					disabled={disabled}
					onChange={onChange}
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
					onChange={onChange}
					placeholder={placeholder}
					rows={textareaOptions?.rows}
					style={textareaOptions?.resize !== false ? undefined : { resize: 'none' }}
					onKeyDown={onKeyDown}
				/>
			}

			{
				type === 'select' &&
				<select
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					multiple={selectOptions?.multiple}
					onChange={onChange}
					onKeyDown={onKeyDown}
				>
					{options.map((option) =>
						<option key={option.value} value={option.value}>
							{option.label ? option.label : option.value}
						</option>
					)}
				</select>
			}

			{
				type === 'checkbox' &&
				<Checkbox
					id={name}
					name={name}
					label={label}
					className={(!isValid ? ' is-invalid' : '')}
					onChange={onChange}
					checked={value}
					onKeyDown={onKeyDown}
				/>
			}

			{
				type === 'checkboxgroup' &&
				options && options.map(option =>
					<Checkbox
						key={option.id}
						label={option.label}
						id={option.id}
						name={name}
						value={option.value}
						checked={value && value.some((v: string) => v === option.value)}
						onChange={onChange}
						onKeyDown={onKeyDown}
					/>
				)
			}

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
								onChange={onChange}
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
