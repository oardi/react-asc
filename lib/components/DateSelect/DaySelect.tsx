import React, { useEffect, useState } from "react";
import { ISelectOption } from '../component.interfaces';
import { Select } from "../Select";

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

export const DaySelect = (props: IDaySelectProps) => {

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

	const init = () => {
		var daysInMonth = new Date(year, month + 1, 0).getDate();
		const newDays: Array<ISelectOption> = [];
		for (let i = 1; i <= daysInMonth; i++) {
			newDays.push({ value: i.toString(), label: i.toString() });
		}
		setDayOptions(newDays);
	};

	const [value, setValue] = useState<number>(day);
	const [dayOptions, setDayOptions] = useState<Array<ISelectOption>>();

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleOnChange = (e: number) => {
		setValue(e);
		onChange && onChange(e);
	}

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={dayOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={value.toString()}
		/>
	);
}
