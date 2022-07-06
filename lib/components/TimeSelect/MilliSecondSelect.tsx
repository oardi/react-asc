import React, { useEffect, useState } from 'react';
import { ISelectOption } from '../component.interfaces';
import { Select } from '../Select';

export interface IMilliSecondProps {
	className?: string;
	value?: number;
	steps?: number;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const MilliSecondSelect = (props: IMilliSecondProps) => {

	const { className, value = 0, steps = 100, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [milliSecondOptions, setMilliSecondOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		const newMilliSecondOptions: Array<ISelectOption> = [];
		for (let i = 0; i < 1000; i += steps) {
			newMilliSecondOptions.push({ value: i.toString(), label: i.toString() });
		}
		setMilliSecondOptions(newMilliSecondOptions);
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
			options={milliSecondOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}
