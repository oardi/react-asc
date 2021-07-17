import React, { useEffect, useState } from "react";
import { ISelectOption, Select } from "../Select";

export interface INumberSelectProps {
	value?: number;
	from?: number;
	to?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const NumberSelect = (props: INumberSelectProps) => {

	const { className, value = 0, from = 0, to = 100, id, name, disabled = false, onChange } = props;

	const [newValue, setNewValue] = useState<number>(0);
	const [numberOptions, setNumberOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		setNewValue(value);
	}, [value]);

	useEffect(() => {
		const options: Array<ISelectOption> = [];
		for (let i = from; i <= to; i++) {
			options.push({ value: i.toString(), label: i.toString() });
		}
		setNumberOptions(options);
	}, [from, to]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('form-control');
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
			options={numberOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}
