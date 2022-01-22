import React, { useEffect, useState } from "react";
import { ISelectOption } from '../component.interfaces';
import { Select } from "../Select";

export interface IMonthProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const MonthSelect = (props: IMonthProps) => {

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const { className, value = new Date().getMonth(), id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [monthOptions, setMonthOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		setMonthOptions(months.map((m, index) => ({ value: index.toString(), label: m })));
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
			options={monthOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}
