import React, { useState } from "react";
import { FormGroup, FormLabel } from "../Form";
import { DaySelect } from "./DaySelect";
import { MonthSelect } from "./MonthSelect";
import { YearSelect } from "./YearSelect";

export enum DATEMODE { YEAR, MONTH, DAY }

export interface IDateSelectProps {
	value?: Date;
	className?: string;
	disabled?: boolean;
	yearConfig?: { from?: number, to?: number };
	onChange?: (val: Date) => void;
}

export const DateSelect = (props: IDateSelectProps) => {

	const { className, value = new Date(), disabled, yearConfig, onChange } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('row');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const [currDate, setCurrDate] = useState<Date>(value);

	const handleOnChange = (e: number, mode: DATEMODE) => {
		const currYear = mode === DATEMODE.YEAR ? e : currDate.getFullYear();
		const currMonth = mode === DATEMODE.MONTH ? e : currDate.getMonth();
		const currday = mode === DATEMODE.DAY ? e : currDate.getDate();
		const newDate = new Date(currYear, currMonth, currday);

		setCurrDate(newDate);
		onChange && onChange(newDate);
	};

	return (
		<div className={getCssClasses()}>
			<FormGroup className="col">
				<FormLabel>Year</FormLabel>
				<YearSelect
					value={currDate.getFullYear()}
					disabled={disabled}
					from={yearConfig?.from}
					to={yearConfig?.to}
					onChange={e => handleOnChange(e, DATEMODE.YEAR)}
				/>
			</FormGroup>
			<FormGroup className="col">
				<FormLabel>Month</FormLabel>
				<MonthSelect
					value={currDate.getMonth()}
					disabled={disabled}
					onChange={e => handleOnChange(e, DATEMODE.MONTH)}
				/>
			</FormGroup>
			<FormGroup className="col">
				<FormLabel>Day</FormLabel>
				<DaySelect
					day={currDate.getDate()}
					month={currDate.getMonth()}
					year={currDate.getFullYear()}
					disabled={disabled}
					onChange={e => handleOnChange(e, DATEMODE.DAY)}
				/>
			</FormGroup>
		</div>
	);
}

/*
* result = { year, month, day, dayOfWeek, weekNumber }
*/

	// const getWeekNumber = () => {
	// 	var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
	// 	var dayNum = d.getUTCDay() || 7;
	// 	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	// 	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	// 	return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
	// };
