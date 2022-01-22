import React, { useEffect, useState } from "react";
import { ISelectOption } from '../component.interfaces';
import { Select } from "../Select";
export interface ISecondProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const SecondSelect = (props: ISecondProps) => {

	const { className, value = 0, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [secondOptions, setSecondOptions] = useState<Array<ISelectOption>>();

	useEffect(() => {
		const newSecondOptions: Array<ISelectOption> = [];
		for (let i = 0; i < 60; i++) {
			newSecondOptions.push({ value: i.toString(), label: i.toString() });
		}
		setSecondOptions(newSecondOptions);
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
			options={secondOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}
