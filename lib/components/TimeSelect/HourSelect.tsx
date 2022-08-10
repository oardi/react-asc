import React, { useEffect, useState } from 'react';
import { ISelectOption } from '../component.interfaces';
import { Select } from '../Select';

export interface IHourProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const HourSelect = (props: IHourProps) => {

	const { className, value = 0, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [hourOptions, setHourOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		const newHourOptions: Array<ISelectOption> = [];
		for (let i: number = 0; i < 24; i++) {
			newHourOptions.push({ value: i.toString(), label: i.toString() });
		}
		setHourOptions(newHourOptions);
	}, []);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleOnChange = (e: number) => {
		setNewValue(e);
		onChange && onChange(e);
	};

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={hourOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
};
