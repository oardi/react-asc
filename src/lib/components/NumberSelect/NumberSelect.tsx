import { useEffect, useState } from 'react';
import { Select } from '../Select';
import type { ISelectOption } from '../component.interfaces';

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

export const NumberSelect = (props: INumberSelectProps): React.JSX.Element => {
	const { className, value = 0, from = 0, to = 100, id, name, disabled = false, onChange } = props;

	const [newValue, setNewValue] = useState<number>(0);
	const [numberOptions, setNumberOptions] = useState<ISelectOption[]>();

	useEffect(() => {
		setNewValue(value);
	}, [value]);

	useEffect(() => {
		const options: ISelectOption[] = [];
		for (let i: number = from; i <= to; i++) {
			options.push({ value: i.toString(), label: i.toString() });
		}
		setNumberOptions(options);
	}, [from, to]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleOnChange = (e: number): void => {
		setNewValue(e);
		onChange && onChange(e);
	};

	return (
		<Select
			id={id}
			name={name}
			className={getCssClasses()}
			options={numberOptions}
			onChange={(e): void => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
};
