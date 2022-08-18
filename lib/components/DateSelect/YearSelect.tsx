import React, { useEffect, useState } from 'react';
import { ISelectOption } from '../component.interfaces';
import { Select } from '../Select';

export interface IYearProps {
	from?: number;
	to?: number;
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const YearSelect = (props: IYearProps) => {

	const {
		className,
		from = 1970,
		to = new Date().getFullYear().toString(),
		value = new Date().getFullYear().toString(),
		id,
		name,
		disabled,
		onChange
	} = props;
	const [newValue, setNewValue] = useState<string>(value.toString());
	const [years, setYears] = useState<ISelectOption[]>();

	useEffect(() => {
		const newYears: ISelectOption[] = [];
		for (let i: number = from; i <= to; i++) {
			newYears.push({ value: i.toString(), label: i.toString() });
		}
		setYears(newYears.reverse());
	}, [from, to]);

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleOnChange = (e: string | string[]) => {
		setNewValue(e as string);
		onChange && onChange(parseInt(e as string));
	};

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={years}
			onChange={handleOnChange}
			disabled={disabled}
			value={newValue}
		/>
	);
};
