import React, { useEffect, useState } from 'react';
import { loggerService } from 'src/shared';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export enum DATEMODE { YEAR, MONTH, DAY }

export interface IDatePickerProps {
	value?: Date;
	selectRange?: boolean;
	// className?: string;
	// disabled?: boolean;
	// yearConfig?: { from?: number, to?: number };
	// onChange?: (val: Date) => void;
}

export const DatePicker = (props: IDatePickerProps): JSX.Element => {

	const { value = new Date(), selectRange } = props;
	const [currDate, setCurrDate] = useState<Date>(value);

	useEffect(() => {
		init();
	}, []);

	// sun, mon, tue
	const init = () => {
		const currYear: number = currDate.getFullYear();
		const currMonth: number = currDate.getMonth();
		const currday: number = currDate.getDate();
		const firstWeekday: number = new Date(currYear, currMonth, 1).getDay();
		const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate()

		loggerService.warn(currYear, currMonth, currday, firstWeekday, lastDateOfMonth);
	};

	// get current date
	// get weeks of month
	// for each week show each day in week

	// month = 1 to end of month

	return (
		<>
			<Calendar
				value={value}
				selectRange={selectRange}
				onChange={setCurrDate}
			/>
		</>
	);
};
