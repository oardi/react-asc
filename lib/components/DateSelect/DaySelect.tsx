import React, { useEffect, useState } from 'react';
import type { ISelectOption } from '../component.interfaces';
import { Select } from '../Select';

export interface IDaySelectProps {
	day?: number;
	month?: number;
	year?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const DaySelect = (props: IDaySelectProps): JSX.Element => {

	const {
		className,
		day = new Date().getDate(),
		month = new Date().getMonth(),
		year = new Date().getFullYear(),
		disabled,
		id,
		name,
		onChange
	} = props;

	useEffect(() => {
		init();
	}, [month, year]);

	const init = (): void => {
		const daysInMonth: number = new Date(year, month + 1, 0).getDate();
		const newDays: ISelectOption[] = [];
		for (let i: number = 1; i <= daysInMonth; i++) {
			newDays.push({ value: i.toString(), label: i.toString() });
		}
		setDayOptions(newDays);
	};

	const [value, setValue] = useState<number>(day);
	const [dayOptions, setDayOptions] = useState<ISelectOption[]>();

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleOnChange = (e: number): void => {
		setValue(e);
		onChange && onChange(e);
	};

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={dayOptions}
			onChange={(e): void => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={value.toString()}
		/>
	);
};
