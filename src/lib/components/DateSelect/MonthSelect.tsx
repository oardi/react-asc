import { useEffect, useState } from 'react';
import { Select } from '../Select';
import type { ISelectOption } from '../component.interfaces';

export interface IMonthProps {
	value?: number;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: number) => void;
}

export const MonthSelect = (props: IMonthProps): React.JSX.Element => {
	const months: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const { className, value = new Date().getMonth(), id, name, disabled, onChange } = props;
	const [newValue, setNewValue] = useState<number>(value);
	const [monthOptions, setMonthOptions] = useState<ISelectOption[]>();

	useEffect(() => {
		setMonthOptions(months.map((m, index) => ({ value: index.toString(), label: m })));
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
			options={monthOptions}
			onChange={(e): void => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
};
