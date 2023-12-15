import { useEffect, useState } from 'react';
import { Select } from '../Select';
import type { ISelectOption } from '../component.interfaces';

export interface IHourProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const HourSelect = (props: IHourProps): JSX.Element => {
	const { className, value = 0, id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [hourOptions, setHourOptions] = useState<ISelectOption[]>();

	useEffect(() => {
		const newHourOptions: ISelectOption[] = [];
		for (let i: number = 0; i < 24; i++) {
			newHourOptions.push({ value: i.toString(), label: i.toString() });
		}
		setHourOptions(newHourOptions);
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
			options={hourOptions}
			onChange={(e): void => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
};
