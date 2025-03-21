import React from 'react';
import { AutoComplete } from '../../AutoComplete';
import { Checkbox } from '../../Checkbox';
import { FileInput } from '../../FileInput';
import { Select } from '../../Select';
import { Textarea } from '../../Textarea';
import type { IFormAutoCompleteOptions, IFormInputOptions, IFormSelectOptions, IFormTextAreaOptions } from '../form.interfaces';
import type { IFormControlType } from '../form.types';
import styles from './FormInput.module.scss';

export interface IFormInputEvent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: any;
	type?: string;
	name?: string;
}

export interface IFormInputProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: any;
	name: string;
	type: IFormControlType;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	readonly?: boolean;
	isValid?: boolean;
	autoFocus?: boolean;
	options?: IFormInputOptions[];
	textareaOptions?: IFormTextAreaOptions;
	selectOptions?: IFormSelectOptions;
	autoCompleteOptions?: IFormAutoCompleteOptions;
	label?: string; // checkbox, radio - move?
	onInput?: (e: IFormInputEvent) => void;
	onChange?: (e: IFormInputEvent) => void;
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | undefined>;
}

export const FormInput = (props: IFormInputProps): React.JSX.Element => {
	const {
		value,
		name,
		type,
		placeholder,
		className,
		isValid = true,
		options = [],
		textareaOptions,
		selectOptions,
		autoCompleteOptions,
		autoFocus,
		label,
		disabled = false,
		readonly = false,
		onInput,
		onChange,
		onBlur,
		onKeyDown,
	} = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.formInput);
		className && cssClasses.push(className);
		!isValid && cssClasses.push(styles['isInvalid']);
		return cssClasses.filter(css => css).join(' ');
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleOnInput = (value: any, type: IFormControlType, name: string): void => {
		onInput && onInput({ value: value, type: type, name: name });
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleOnChange = (value: any, type: IFormControlType, name: string): void => {
		onChange && onChange({ value: value, type: type, name: name });
	};

	return (
		<>
			{/* 'toggle' */}

			{(type === 'text' ||
				type === 'date' ||
				type === 'datetime-local' ||
				type === 'email' ||
				type === 'number' ||
				type === 'password' ||
				type === 'color' ||
				type === 'time') && (
				<input
					id={name}
					name={name}
					type={type}
					className={getCssClasses()}
					value={value}
					autoFocus={autoFocus}
					onInput={(e): void => handleOnInput((e.target as HTMLInputElement).value, type, name as string)}
					onChange={(e): void => handleOnChange((e?.target as HTMLInputElement).value, type, name as string)}
					onBlur={onBlur}
					placeholder={placeholder}
					readOnly={readonly}
					disabled={disabled}
					onKeyDown={onKeyDown}
				/>
			)}

			{type === 'file' && (
				<FileInput
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value}
					autoFocus={autoFocus}
					readOnly={readonly}
					disabled={disabled}
					onChange={(e): void => handleOnChange(e.target.value, type, name)}>
					choose a file
				</FileInput>
			)}

			{type === 'textarea' && (
				<Textarea
					id={name}
					name={name}
					className={className}
					error={!isValid}
					value={value}
					disabled={disabled}
					autoFocus={autoFocus}
					onInput={(e): void => handleOnInput((e.target as HTMLTextAreaElement).value, type, name as string)}
					onChange={(e): void => handleOnChange((e.target as HTMLTextAreaElement).value, type, name as string)}
					placeholder={placeholder}
					rows={textareaOptions?.rows}
					style={textareaOptions?.resize !== false ? undefined : { resize: 'none' }}
				/>
			)}

			{type === 'select' && (
				<Select
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value as string}
					disabled={disabled}
					multiple={selectOptions?.multiple}
					onChange={(e): void => handleOnChange(e, type, name as string)}
					options={options}
				/>
			)}

			{type === 'autocomplete' && (
				<AutoComplete
					id={name}
					name={name}
					className={className + (!isValid ? ' is-invalid' : '')}
					value={value as string}
					disabled={disabled}
					openOnFocus={autoCompleteOptions?.openOnFocus}
					onChange={(e): void => handleOnChange(e, type, name as string)}
					onSelect={(e): void => handleOnChange(e.value, type, name as string)}
					options={options}
				/>
			)}

			{type === 'checkbox' && (
				<Checkbox
					id={name}
					name={name}
					label={label}
					disabled={disabled}
					className={!isValid ? ' is-invalid' : ''}
					onChange={(e): void => handleOnChange((e?.target as HTMLInputElement).checked, type, name as string)}
					checked={value}
				/>
			)}

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

			{type === 'radio' && (
				<>
					{options.map(option => (
						<div className="form-check" key={option.id}>
							<input
								id={option.id ? option.id : option.value}
								name={name}
								type="radio"
								className="form-check-input"
								onChange={(e): void => handleOnChange((e?.target as HTMLInputElement).value, type, name as string)}
								value={option.value}
								checked={value === option.value}
								onKeyDown={onKeyDown}
							/>
							<label className="form-check-label" htmlFor={option.id}>
								{option.label}
							</label>
						</div>
					))}
				</>
			)}
		</>
	);
};
