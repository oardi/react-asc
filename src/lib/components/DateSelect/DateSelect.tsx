import { useEffect, useState } from "react";
import { ISelectOption, Select } from "../Select";

export interface IYearProps {
	from?: number;
	to?: number;
	value?: string;
	className?: string;
	disabled?: boolean;
	onChange?: (val: string | Array<string>) => void;
}

export const YearSelect = (props: IYearProps) => {

	const {
		className = '',
		from = 1970,
		to = new Date().getFullYear().toString(),
		value = new Date().getFullYear().toString(),
		disabled
	} = props;
	const [newValue, setNewValue] = useState<string>(value);
	const [years, setYears] = useState<Array<ISelectOption>>();

	useEffect(() => {
		const newYears: Array<ISelectOption> = [];
		for (let i = from; i <= to; i++) {
			newYears.push({ value: i.toString(), label: i.toString() });
		}
		setYears(newYears.reverse());
	}, [from, to]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleOnChange = (e: string | Array<string>) => {
		setNewValue(e as string);
	}

	return (
		<Select
			id="yearSelect"
			name="yearSelect"
			className={getCssClasses()}
			options={years}
			onChange={handleOnChange}
			disabled={disabled}
			value={newValue}
		/>
	);
}

export interface IMonthProps {
	value?: number;
	className?: string;
	disabled?: boolean;
	onChange?: (val: string | Array<string>) => void;
}

export const MonthSelect = (props: IMonthProps) => {

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const { className, value = new Date().getMonth(), disabled } = props;

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
	}

	return (
		<Select
			id="monthSelect"
			name="monthSelect"
			className={getCssClasses()}
			options={monthOptions}
			onChange={(e) => handleOnChange(parseInt(e as string))}
			disabled={disabled}
			value={newValue.toString()}
		/>
	);
}

export const DaySelect = () => {
	// days by current month
	// days
	return (
		<>
		</>
	);
}


export interface IDateSelectProps {

}

export const DateSelect = (props: IDateSelectProps) => {
	// default all three selects
	// mode: year, month, day

	return (
		<>
			<YearSelect />
			<MonthSelect />
			<DaySelect />
		</>
	);
}
