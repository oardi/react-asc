import React, { useState } from "react";
import { FormGroup } from "../Form";
import { HourSelect } from "./HourSelect";

export enum TIMEMODE { HOUR, MINUTE, SECONDS, MILLISECONDS };

export interface ITimeSelectProps {
	value?: Date;
	className?: string;
	id?: string;
	name?: string;
	disabled?: boolean;
	onChange?: (val: Date) => void;
}

export const TimeSelect = (props: ITimeSelectProps) => {

	const { className, value = new Date(), disabled, onChange } = props;

	const [currDate, setCurrDate] = useState<Date>(value);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleOnChange = (e: number, mode: TIMEMODE) => {
		console.warn(e);

		const currYear = currDate.getFullYear();
		const currMonth = currDate.getMonth();
		const currday = currDate.getDate();

		const currHour = mode === TIMEMODE.HOUR ? e : currDate.getHours();
		const currMinute = mode === TIMEMODE.MINUTE ? e : currDate.getMinutes();
		const currSeconds = mode === TIMEMODE.SECONDS ? e : currDate.getSeconds();
		const currMilliSeconds = mode === TIMEMODE.MILLISECONDS ? e : currDate.getMilliseconds();

		const newDate = new Date(currYear, currMonth, currday, currHour, currMinute, currSeconds, currMilliSeconds);

		setCurrDate(newDate);

		onChange && onChange(newDate);
	}

	return (
		<div className={getCssClasses()}>
			<FormGroup className="col-4">
				<HourSelect
					className="form-control"
					value={currDate.getHours()}
					disabled={disabled}
					onChange={e => handleOnChange(e, TIMEMODE.HOUR)}
				/>
			</FormGroup>
			{/* HourSelect */}
			{/* MinuteSelect */}
			{/* SecondsSelect */}
			{/* MilliSecondsSelect */}
		</div>
	);
}
