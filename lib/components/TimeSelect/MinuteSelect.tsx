import React, { useEffect, useState } from 'react';
import { ISelectOption } from '../component.interfaces';
import { Select } from '../Select';

export interface IMinuteProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const MinuteSelect = (props: IMinuteProps) => {

	const { className, value = 0, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [minuteOptions, setMinuteOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		const newMinuteOptions: Array<ISelectOption> = [];
		for (let i = 0; i < 60; i++) {
			newMinuteOptions.push({ value: i.toString(), label: i.toString() });
		}
		setMinuteOptions(newMinuteOptions);
	}, []);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleOnChange = (e: number) => {
		setNewValue(e);
		onChange && onChange(e);
	}

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={minuteOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}
