import React, { Fragment } from 'react';
import { Checkbox } from '../Checkbox';
import { IFormInputOptions, IFormTextAreaOptions } from './form.interfaces';
import { IControlType } from './form.types';

export interface IFormInputProps {
	value: any;
	name: string;
	type: IControlType;
	placeholder?: string;
	className?: string;
	disabled?: boolean; // TODO
	readonly?: boolean; // TODO
	isValid?: boolean;
	autoFocus?: boolean;
	options?: Array<IFormInputOptions>;
	textareaOptions?: IFormTextAreaOptions;
	label?: string; // checkbox, radio - move?
	onChange: (event) => void;
	onBlur: (event) => void;
}

export const FormInput = ({
	value,
	name,
	type,
	placeholder,
	className = 'form-control',
	isValid,
	options = [],
	textareaOptions,
	autoFocus,
	label,
	disabled = false,
	readonly = false,
	onChange,
	onBlur
}: IFormInputProps) => {

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
					type === 'email' ||
					type === 'number' ||
					type === 'password' ||
					type === 'color' ||
					type === 'time' ||
					type === 'file'
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
				/>

				// autoComplete="new-password"
			}

			{
				type === 'textarea' &&
				<textarea
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					onChange={onChange}
					placeholder={placeholder}
					rows={textareaOptions && textareaOptions.rows ? textareaOptions.rows : null}
					style={textareaOptions && textareaOptions.resize !== false ? null : { resize: 'none' }}
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
					onChange={onChange}
				>
					<option value="">choose</option>
					{options.map((option) =>
						<option key={option.value} value={option.value}>
							{option.label}
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
					className={className + (!isValid ? ' is-invalid' : '')}
					onChange={onChange}
					checked={value}
				/>
			}

			{
				type === 'checkboxgroup' &&
				options && options.map(option =>
					<Checkbox
						label={option.label}
						id={option.id}
						name={name}
						value={option.value}
						checked={value && value.some(v => v === option.value)}
						onChange={onChange}
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
