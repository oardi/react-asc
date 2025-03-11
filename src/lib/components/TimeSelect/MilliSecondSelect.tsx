import { useEffect, useState } from 'react';
import { Select } from '../Select';
import type { ISelectOption } from '../component.interfaces';

export interface IMilliSecondProps {
	className?: string;
	value?: number;
	steps?: number;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const MilliSecondSelect = (props: IMilliSecondProps): React.JSX.Element => {
	const { className, value = 0, steps = 100, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [milliSecondOptions, setMilliSecondOptions] = useState<ISelectOption[]>();

	useEffect(() => {
		const newMilliSecondOptions: ISelectOption[] = [];
		for (let i: number = 0; i < 1000; i += steps) {
			newMilliSecondOptions.push({ value: i.toString(), label: i.toString() });
		}
		setMilliSecondOptions(newMilliSecondOptions);
	}, []);

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
			options={milliSecondOptions}
			onChange={(e): void => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
};
